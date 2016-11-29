import pymongo
from pymongo import Connection

connection = Connection()
db = connection['project']
connection = db['info']


print('Connected To the "Project" Database')



post = {
		"Title":"PS4",
		"Body":"PS4 Project Launches Today",
		}
		
posts = db.posts
posts.insert(post)




