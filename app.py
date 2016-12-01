
from flask import Flask, send_from_directory
import bson, json
from flask import request as r
from bson.json_util import dumps
import pymongo
from pymongo import MongoClient, collection
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


@app.route('/h', methods = ['GET'])
def requestHandler():
    
    
    the_file = db.posts.find()
    
    print  ("\nTest from DB")
    theData = []
    for a in the_file:
        print(type(a), a)
        theData.append({"title":a["title"],"body":a["body"]})

    print(theData)
    return dumps(theData)
    
    the_file.close()

@app.route('/h', methods = ['POST'])
def sendToDB():
    
    the_file = db.posts.find()
    
    posts = db.posts
    print("starting post to db")
    self = r.get_json()
    print("\ngot self\n")
    print (self)
    print("executing insert")
    posts.insert( self)
    
    return 'Successful post'

    the_file.close()
        
if __name__ == "__main__":
    app.run(debug = True)
    
#client.close()