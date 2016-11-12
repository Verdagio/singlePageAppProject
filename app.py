from flask import Flask,render_template
#from HTMLParser import HTMLParser
import pymongo
from pymongo import MongoClient

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
client = MongoClient()
db = client.fliDb

app = Flask(__name__)

#filename = 'C:/Users/Karle Sleith/Desktop/singlePageAppProject/index.html'
#f = open(filename, "r").read()

games = db.games.find_one()
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

#@ signifies a decorator -  Function
@app.route('/')
def root():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug = True)