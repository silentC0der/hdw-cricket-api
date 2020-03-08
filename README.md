# hdw-cricket-api
We’re building a sports app where a user can view a list of popular Cricket players and compare statistics between two players.

#import cricket raw data ====> change database, collection and file path
mongoimport --jsonArray --db db_hdw --collection crickets --file /home/ashutoshnarayansingh/hdw-cricket-api/data.json

Step-1: git clone the above repository.
Step-2: npm start (required node>10)
Step-3: npm run dev
