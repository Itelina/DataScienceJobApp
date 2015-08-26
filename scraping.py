import requests
import pprint
from bs4 import BeautifulSoup
import numpy as np
import pickle
import re
import json
from pymongo import MongoClient

baseurl = "http://api.indeed.com/ads/apisearch?"

publisher = "2227812399183727"
q = 'data+scientist'
l = "New+York+City"
jt = "fulltime"
fromage = "90"
limit = "3000"

def getMaxResults(publisher=publisher, q=q, l=l, jt=jt, fromage=fromage, limit=limit):
    url = baseurl+"publisher="+publisher+"&q="+q+"&l="+l+"&jt="+jt+"&limit="+limit+"&fromage="+fromage+"&v=2"
    response = requests.get(url)
    soup = BeautifulSoup(response.text)
    return int(soup.find_all("totalresults")[0].text)

def getJobSummaries(publisher=publisher, q=q, l=l, jt=jt, fromage=fromage):
    print "Getting Job Posting Data ..."
    jobsummaries = []
    nmax = getMaxResults(publisher, q, l, jt, fromage, limit)
    nnmax = [1025 if nmax > 1025 else nmax][0]
    iterlist = list(np.arange(0, nnmax, 25))
    
    for i in iterlist:
        link = baseurl+"publisher="+publisher+"&q="+q+"&l="+l+"&jt="+jt+"&limit="+limit+"&fromage="+fromage+"&start="+str(i)+ "&v=2"
        response = requests.get(link)
        while response.status_code != 200:
            time.sleep(1)
            response = requests.get(link)
        soup = BeautifulSoup(response.text)
        size = len(soup.find_all('result'))
        #print size
        for i in range(0, size):
            jobsummary = {}
            
            #Get job posting summary details
            jobsummary['jobtitle'] = soup.find_all("jobtitle")[i].text
            jobsummary['company'] = soup.find_all("company")[i].text
            jobsummary['city'] = soup.find_all("city")[i].text
            jobsummary['state'] = soup.find_all("state")[i].text
            jobsummary['loc'] = soup.find_all("formattedlocationfull")[i].text
            jobsummary['postdate'] = soup.find_all("date")[i].text
            jobsummary['relevance'] = i
            
            #Get detailed job posting from corresponding URLs
            url = soup.find_all('url')[i].text
            response2 = requests.get(url)
            while response2.status_code != 200:
                time.sleep(1)
                response2 = requests.get(url)
            #print response2.status_code
            soup2 = BeautifulSoup(response2.text)
            jobsummary['summary'] = soup2.find(class_="summary").text
            jobsummary['url'] = url
            #Adding individual job summary to dataset
            jobsummaries.append(jobsummary)
    return jobsummaries

if __name__ == '__main__':
	jobsummaries_NY = getJobSummaries()
	
	
	#Adding in new data
	client = MongoClient()
	client.jobsearch.drop_collection('indeedny')
	
	print "Storing into MongoDB database ..."
	indeedny = client.jobsearch.indeedny
	for item in jobsummaries_NY:
		indeedny.insert(item)

		