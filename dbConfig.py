import pymongo
from pymongo import MongoClient
connection = MongoClient()
db = connection['project']
connection = db['info']


print('Connected To the "Project" Database')



post = {
		"Title":"hello",
		"Body":"h0feeo Project Launches Today",
		}
		
posts = db.posts
posts.insert(post)




