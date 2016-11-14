import pymongo
from pymongo import MongoClient

client = MongoClient()

def setDB():
    
    #Connect to DB

    db = client.flIDb
    
    #Search/ Create Collection
    games = db.games
    
    games.insert({"Title" : "MarioSwitch",
    "Content" : "New Mario Game Announced",
    "User" : "WhiteLycan009"})
    
    games.insert({"Title" : "GodOf4",
    "Content" : "Krato's son",
    "User" : "Verdagio"})
    
    games.insert({"Title" : "Vote Trump!",
    "Content" : "President Trump",
    "User" : "SkankHunt42"})
    
    g= games.find();
    
    print('Insert and find fliDB')
    for game in g:
        print (game)
    
    if __name__ == "__main__":
        setDb()