#
from flask import Flask, request, send_from_directory
import pymongo
from pymongo import MongoClient
import json
import flask as fff

#-------------------------------------#
client = MongoClient()
db = client.local
#db.client.test

payload = {'id':'val','title':'tVal','body': 'bVal'}

g = db.h.find()

app = Flask(__name__)



#-------------------------------------#
#The code below defines the path in which to find
#app.js application which will allow our app to 
#execute on local host... muuurica! f**k yeah! :)





#The route for our index.html is sent as a staic file
@app.route('/')
def index():
    return app.send_static_file("index.html")

@app.route('/./static/js/<path:path>')
def send_js(path):
    return app.send_from_directory('app.js',path)


@app.route('/h', methods = ['POST', 'GET'])
def requestHandler():
    document = db.h.find()  
    #dataStream = requests.post(client, d = json.dumps(payload))
    #document = "lol"
    
    a = []
    for a in g :
        str(a)
        
    title = str(a ['title'])
    body = str(a ['body'])
    return (title + " " + body)

    
	

	
if __name__ == "__main__":
    app.run(debug = True)
    
client.close()