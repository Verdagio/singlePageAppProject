# Single Page App Project
### Authors - Daniel Verdejo, & Karle Sleith

# Project outline
In this project, we look to utilize multiple technologies to build a single page web application. The first tasks of the project we’re choosing what we wanted our single page application to do, and then choosing the technologies we would use to accomplish this. The choice of application would be a blog style entertainment website (see below). 

The technologies to be used we’re to be: AngularJS, Bootstrap, Flask via Python, HTML5 & CSS3, & MongoDB. 
To accomplish our goal we would need to research and expand upon our existing knowledge of: AngularJS,  Flask via Python, & MongoDB. To do this we would reference the related API’s, read articles, & communicate to workout problems together. 

### Setup & Installation
To be able to run the web application on your system you will need to do the following:

##### MongoDB

######Install

Go to: [Download MongoDb](https://docs.mongodb.com/)

Download & Install MongoDB 
How to, Reference: [MongoDB Documentation](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-windows/)

In Windows Explorer, locate the downloaded MongoDB .msi file, which typically is located in the default Downloads folder. 
Double-click the .msi file. A set of screens will appear to guide you through the installation process.

######Setup & Installation

Using the **Command Prompt** do the following:

`cd /`

`mkdir data/db/`

######Connect to MongoDB

Using the **Command Prompt** do the following:

`cd /`

`cd Program Files\MongoDB\Server\3.2\bin\mongo`

In another **Command Prompt** instance:

`cd /`

`cd Program Files\MongoDB\Server\3.2\bin\mongod`

### Python 3.5.2 (Anaconda)

######Setup & Installation

Go to: [Download Python Anaconda](https://www.continuum.io/downloads)

Download and double click the installer, follow the on-screen instructions for installation.

######Installing modules
Using the **Command Prompt** do the following:
Navigate to the Application folder, then to the Scripts folder, then enter the following

`pip install pymongo`

`pip install flask`


### Running the WebApp on localhost
In **Command Prompt**

First we need to configure the database:

Step 1:
Go to the directory of mongoDB where you downloaded it and run both MongoD.exe and Mongo.exe,
This is important as the web app requires a database to launch.

Step 2:
Go to the directory of singlePageAppProject where you downloaded it and run dbConfig.py, this will create the "project database"
This creates the database and gives it a placeholder object for you to view on the Topics page.

`python dbConfig.py`

Step 3:
Go to the directory of singlePageAppProject where you downloaded it and run app.py, this will launch the app on the localHost on port 5000 / 127.0.0.1:5000.


`python app.py`

Enjoy The FourLeafInteractive Website!




### Conclusion
### Karle Sleith & Daniel Verdejo - November 31st 2016

At the start of the project we set our goal, to develop a single page web app, using Python, AngularJs and MongoDb, and we are delighted that we achieved this.

There was many more things we wished to do on the project however, we hoped to have images in the Database, Video Embedding and an User Account system. This was lost due to time constraints and issues we had on the project.

The first main issue arose a month into developement, We each worked on our own side of the project, Karle on Back-end, Daniel on Front-end, and when the time came to put them together, it just wouldn't work. This set us back a week. The problem turned out to be a series of issues, the python wasn't connecting to the App.Js, HTTP requests were not what we wanted, and the cache on the laptops weren't being cleared, so when we had changed code, it still showed the same. To combat this, We decided to do our coding together, when we were both in the same room, this would help us better communicate our issues, and help us both understand the others work.

The second issue we had was not as large, we spent time trying to pass information from MongoDB through the factories, we discovered that MongoDB uses a BSON format, and that it needed to be parsed to JSON for it to be read.

We did this project as a team, there was times when argurments were made about how a sitituation should be handeled, and each time we tried to be respectful of each others opinion, and come to a compromise in a calm and professional manner.

All in all, the project went smoothly apart from a few stresses and setbacks. We both learned alot with this project, like what's allowed and not allowed when passing data between 4 diffrent languages. if we were to do it again we would try and avoid Angular and stick to Flask and HTML. MongoDB had a learning curve, to be able to use, but once it was solved, it was pretty straight forward.


### References

[Angular JS Docs](https://docs.angularjs.org/api)

[Angular correct data binding](https://thinkster.io/a-better-way-to-learn-angularjs/services)

[Flask Docs](http://flask.pocoo.org/docs/0.11/)

[Python Docs](https://docs.python.org/3/)

[MongoDB Docs](http://api.mongodb.com/python/current/)

[Stack Overflow Question]((http://stackoverflow.com/questions/40897467/angularjs-w-flask-backend-representing-the-data-passed-from-backend/40898990#40898990)

[Stack Overflow](http://stackoverflow.com/)
