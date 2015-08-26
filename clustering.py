import re
from pymongo import MongoClient
from textblob import TextBlob
from sklearn.feature_extraction.text import CountVectorizer
import lda
import numpy as np
import json 
import operator

def getRawData(data='indeedny'):
    client = MongoClient()
    collection = client.jobsearch[data]
    cursor = collection.find()
    nmax = collection.count()

    rawreviews = [(cursor[i]['company'].encode('ascii','ignore').upper(), cursor[i]['jobtitle'].encode('ascii','ignore'), cursor[i]['summary'].encode('ascii','ignore'), cursor[i]['url'].encode('ascii','ignore')) for i in range(nmax)]
    print "total reviews: " + str(len(rawreviews))
    return rawreviews

def getRelJobs(data):
    indexes = []
    for i, item in enumerate(data):
        if re.findall("[Dd]ata|[Aa]nalyt|[Aa]nalytic|[Aa]nalytics|Predictive|Decision|Machine|Statistics|Statistician", item[1]):
            indexes.append(i)
    newreviews = [rawreviews[i] for i in indexes]
    print "relevant reviews: " + str(len(newreviews))
    return newreviews

def dataProcessing(data):
    rawreviews2 = []
    for i, review in enumerate(data):
        
        #Taking out appearances of company name in job summaries
        title1 = review[0]
        nreview = re.sub(title1, " ", review[2]).lower()
        
        #Taking out "/n" in job summaries
        nreview = re.sub("\\n|/", " ", nreview)

		#Subbing the word teams for team
        nreview = re.sub("teams", "team", nreview)
        
        #Extracting nouns + gerunds
        nreview = ' '.join([tag[0] for tag in TextBlob(nreview).tags if tag[1] in [u'NN', u'NNS', u'NNP', u'NNPS', u'VBG', u'JJ', u'JJS', u'JJR']])
                            
        rawreviews2.append(nreview)
    
    return rawreviews2

def getTopicWords(data):
	#Input: bag of words output from dataProcessing()
	#Output: 3 json files 1) word topic distribution 2) top words for each topic 3) job posting to topic matched
    
    stopwords = ["deloitte", "adp", "prudential", "using", "sigma", "com", 'san', 'francisco', 'candidate', 'data', 'city', 'such', 'job', 'comcast', 'appropriate', 'experience', 'york']
    
    #Vectorize bag of words
    vectorizer = CountVectorizer(stop_words=stopwords, ngram_range=(1,2), min_df = 5)
    vectorizer.fit(data)
    x = vectorizer.transform(data)
    features = vectorizer.get_feature_names()
    print "feature length: " + str(len(features))
    
    #Running LDA
    model = lda.LDA(n_topics=9, n_iter=500, random_state=1)
    model.fit(x)
    
    #Outputting top topic words
    topic_word = model.topic_word_ 
    
    n_top_words = 15
    ldatopics = {}
    topwords = {}

    for i, distr in enumerate(topic_word):
        #make dictionary containing all feature distributions
        ldatopics[i] = dict(zip(features, distr))
        
        #make dictionary containing top words
        topic_words = np.array(features)[np.argsort(distr)][:-n_top_words:-1]
        topwords[i] = zip(list(topic_words), list(distr[np.argsort(distr)][:-n_top_words:-1]))
        print('Topic {}: {}'.format(i, ' '.join(topic_words).encode('utf-8').strip()))
    
    #Outputting documents related to topics
    doc_topic = model.doc_topic_
    jobtopics = []
    for i in range(x.shape[0]):
        jobtopic = {}
        jobtopic['index'] = i
        jobtopic['company'] = newreviews[i][0]
        jobtopic['position'] = newreviews[i][1]
        jobtopic['summary'] = re.sub("\\n", " ", newreviews[i][2])
        jobtopic['toptopic'] = doc_topic[i].argmax()
        jobtopic['url'] = newreviews[i][3]
        jobtopics.append(jobtopic)
    
    return ldatopics, topwords, jobtopics

def makeWordCloud(data):
    jsondata = {}
    for key, values in data.iteritems():
        newkey = "topic" + str(key)
        json1 = []
        for value in values:
            json2 = {}
            json2['text'] = value[0].encode('ascii','ignore')
            json2['size'] = value[1]
            json1.append(json2)
        
        jsondata[newkey] = json1
    
    return jsondata

def makeBarGraphs(data):
    jsondata = []
    for key, values in data.iteritems():
        series = {}
        series['key'] = "Topic " + str(key+1)
      
        sortedvalues = sorted(values.items(), key=operator.itemgetter(1))
        newvalues = sortedvalues[-20:][::-1]

        json1 = []
        for item in newvalues:
            json2 = {}
            json2['label'] = item[0].encode('ascii','ignore')
            json2['value'] = item[1]
            #print json2
            json1.append(json2)
            #print json1
        
        series['values'] = json1
        jsondata.append(series)
    
    return [jsondata[0]], [jsondata[1]], [jsondata[2]], [jsondata[3]], [jsondata[4]], [jsondata[5]], [jsondata[6]], [jsondata[7]], [jsondata[8]]

def makeListData(data):
    topiclists = range(0, 9)
    finaldata = {}
    for i in topiclists:
        newdata = []
        for item in data:
            if item['toptopic'] == i:
                row = {}
                row['company'] = item['company']
                row['position'] = item['position']
                row['summary'] = item['summary'][:200] + "..."
                row['url'] = item['url']
                newdata.append(row)
        finaldata[i] = newdata
    return finaldata[0], finaldata[1], finaldata[2], finaldata[3], finaldata[4], finaldata[5], finaldata[6], finaldata[7], finaldata[8]

if __name__ == '__main__':
	
	print "getting raw data ..."
	rawreviews = getRawData()
	
	print "selecting most relevant jobs ..."
	newreviews = getRelJobs(data=rawreviews)
	
	print "processing data ..."
	bagofwords = dataProcessing(data=newreviews)
	
	print "making word lists etc ..."
	allwords, topwords, jobtopic = getTopicWords(data=bagofwords)

	print "making json file ..."
	wordcloud = makeWordCloud(data=topwords)
	bargraph1, bargraph2, bargraph3, bargraph4, bargraph5, bargraph6, bargraph7, bargraph8, bargraph9 = makeBarGraphs(data=allwords)
	listdata1, listdata2, listdata3, listdata4, listdata5, listdata6, listdata7, listdata8, listdata9 = makeListData(data=jobtopic)

	#Printing out Json files
	print "writing json file ..."
	
	with open('static/data/wordsjson.json', 'w') as f:
		json.dump(wordcloud, f)

	with open('static/data/bargraph1.json', 'w') as f:
		json.dump(bargraph1, f)
	with open('static/data/bargraph2.json', 'w') as f:
		json.dump(bargraph2, f)
	with open('static/data/bargraph3.json', 'w') as f:
		json.dump(bargraph3, f)
	with open('static/data/bargraph4.json', 'w') as f:
		json.dump(bargraph4, f)
	with open('static/data/bargraph5.json', 'w') as f:
		json.dump(bargraph5, f)
	with open('static/data/bargraph6.json', 'w') as f:
		json.dump(bargraph6, f)
	with open('static/data/bargraph7.json', 'w') as f:
		json.dump(bargraph7, f)
	with open('static/data/bargraph8.json', 'w') as f:
		json.dump(bargraph8, f)
	with open('static/data/bargraph9.json', 'w') as f:
		json.dump(bargraph9, f)

	with open('static/data/listdata1.json', 'w') as f:
		json.dump(listdata1, f)
	with open('static/data/listdata2.json', 'w') as f:
		json.dump(listdata2, f)
	with open('static/data/listdata3.json', 'w') as f:
		json.dump(listdata3, f)
	with open('static/data/listdata4.json', 'w') as f:
		json.dump(listdata4, f)
	with open('static/data/listdata5.json', 'w') as f:
		json.dump(listdata5, f)
	with open('static/data/listdata6.json', 'w') as f:
		json.dump(listdata6, f)
	with open('static/data/listdata7.json', 'w') as f:
		json.dump(listdata7, f)
	with open('static/data/listdata8.json', 'w') as f:
		json.dump(listdata8, f)
	with open('static/data/listdata9.json', 'w') as f:
		json.dump(listdata9, f)
	