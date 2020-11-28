# jobHunt

a simple nodejs program to track job applications
test


Backend is a nodejs program - index.js   
    . uses express to serve up the http server and api requests
    . uses nedb as a simple document db to store data - database.db
    . database is stored in the db folder

Frontend uses std html/css/java/bootstrap

LOCAL
    . node is install
    . clone repo
    . run: npm install # to install required packages
    . run: npm start   #connect browser to port 3000

DOCKER
    - docker build -t jobhunt .
    - image presently comes out as 176MB
    - docker run --rm -d -p 3000:3000 -v $PWD/db:/app/db jobhunt
    - browser to localhost:3000