#
from flask import Flask,request, send_from_directory
import pymongo
from pymongo import MongoClient
import json

#-------------------------------------#
client = MongoClient()
db = client.test
#db.client.test

payload = {'id':'val','title':'tVal','body': 'bVal'}

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


#@app.route('/test', methods = ['POST'])
#def cool():
#    dataStream = requests.post(client, d = json.dumps(payload))
        
	

	
if __name__ == "__main__":
    app.run(debug = True)