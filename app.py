
from flask import Flask, request, send_from_directory, jsonify
import bson 
from bson.json_util import dumps
import pymongo
from pymongo import MongoClient
import flask as fff

#-------------------------------------#


client = MongoClient()
db = client.project

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
    
    the_file = db.posts.find()
    
    print  ("\nTest from DB")
    
    
    theData = []
    for a in the_file:
        print(type(a), a)
        theData.append({"Title":a["Title"],"Body":a["Body"]})
    
    print(theData)
    return jsonify(theData)
    
    the_file.close()


if __name__ == "__main__":
    app.run(debug = True)
    
#client.close()