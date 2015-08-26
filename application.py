import flask
from flask import render_template
import os

app = flask.Flask(__name__)


@app.route("/")
def summary():
	data=open("static/data/wordsjson.json").read()
	return render_template('summary.html', data=data)

@app.route("/cluster1")
def cluster1():
	data1=open("static/data/bargraph1.json").read()
	data2=open("static/data/listdata1.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster2")
def cluster2():
	data1=open("static/data/bargraph2.json").read()
	data2=open("static/data/listdata2.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster3")
def cluster3():
	data1=open("static/data/bargraph3.json").read()
	data2=open("static/data/listdata3.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster4")
def cluster4():
	data1=open("static/data/bargraph4.json").read()
	data2=open("static/data/listdata4.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster5")
def cluster5():
	data1=open("static/data/bargraph5.json").read()
	data2=open("static/data/listdata5.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster6")
def cluster6():
	data1=open("static/data/bargraph6.json").read()
	data2=open("static/data/listdata6.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster7")
def cluster7():
	data1=open("static/data/bargraph7.json").read()
	data2=open("static/data/listdata7.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster8")
def cluster8():
	data1=open("static/data/bargraph8.json").read()
	data2=open("static/data/listdata8.json").read()
	return render_template('details.html', data1=data1, data2=data2)

@app.route("/cluster9")
def cluster9():
	data1=open("static/data/bargraph9.json").read()
	data2=open("static/data/listdata9.json").read()
	return render_template('details.html', data1=data1, data2=data2)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.debug = True
    app.run(host='0.0.0.0', port=port)