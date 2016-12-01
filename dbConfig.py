#Karle Sleith November 12th
#Importing Modules into Python
import pymongo
from pymongo import MongoClient
#Connects to the Database "project", if database doesnt exist, creates one
connection = MongoClient()
db = connection['project']
connection = db['info']

#User message
print('Connected To the "Project" Database')


#Placeholder Object That is posted to the Database
post = {
		"title":"Overwatch",
		"body":"New hero Sombra added to the roster, She is a very offensive character, Stealth and debilitating attacks make Sombra a powerful infiltrator.",
		}

#insert the Placeholer Post into the Database
posts = db.posts
posts.insert(post)




