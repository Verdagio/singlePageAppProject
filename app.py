
from flask import Flask, request, send_from_directory
import bson 
from bson.json_util import dumps
import pymongo
from pymongo import MongoClient
import flask as fff

#-------------------------------------#


client = MongoClient()
db = client.project


payload = {'id':'val','title':'tVal','body': 'bVal'}

g = db.posts.find()


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
    
    print  ("\nTest from DB")
    
    #l = loads(bson_file.read())
    l = []
    for a in g: l.append({"_id":a["_id"],"Title":a["Title"],"Body":a["Body"]})
    
    print(l)
    return dumps(l)


if __name__ == "__main__":
    app.run(debug = True)
    
#client.close()