<<<<<<< HEAD

from flask import Flask, send_from_directory
import bson, json
from flask import request as r
=======
#Karle Sleith -November
#Importing Modules into Python
from flask import Flask, request, send_from_directory, json
import bson 
>>>>>>> da74af49d0e4bf23a1ed3eb96bef4d4a72c9e7b9
from bson.json_util import dumps
import pymongo
from pymongo import MongoClient, collection
import flask as fff

#-------------------------------------#

#Connecting to the Database
client = MongoClient()
db = client.project

#Creating the App
app = Flask(__name__)


#-------------------------------------#
#The code below defines the path in which to find
#app.js application which will allow our app to 
#execute on local host...


#The route for our index.html is sent as a staic file
@app.route('/')
def index():
    return app.send_static_file("index.html")

#Routing the Path to App.Js
@app.route('/./static/js/<path:path>')
def send_js(path):
    return app.send_from_directory('app.js',path)

#Getting the information from the DB
@app.route('/h', methods = ['GET'])
def requestHandler():
    
    #defining db location
    the_file = db.posts.find()
    
    print  ("\nTest from DB")
    theData = []
    for a in the_file:
        print(type(a), a)
        theData.append({"title":a["Title"],"body":a["Body"]})

    print(theData)
    #Dumps data as JSON Object
    return dumps(theData)
    
    the_file.close()

    #Post to the Database
@app.route('/h', methods = ['POST'])
def sendToDB():
    
    #defining db location
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
        
    #Runs the App
if __name__ == "__main__":
    app.run(debug = True)
    
#client.close()