#Created By Karle Sleith

from flask import Flask,render_template
import pymongo
from pymongo import MongoClient

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
client = MongoClient()
db = client.fliDb

app = Flask(__name__)

games = db.games
g= games.find()

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

#@ signifies a decorator -  Function
@app.route('/')
def root():
    return render_template("index.html")

@app.route('/profile/<name>')
def profile(name):
    return render_template("index.html",name=name)

@app.route('/d', methods = ["GET"])
def content():
    for game in g:
        m = str(game)
        return "GET" + 

if __name__ == "__main__":
    app.run(debug = True)