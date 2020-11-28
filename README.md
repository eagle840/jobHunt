# jobHunt

a simple nodejs program to track job applications
test


Backend is a nodejs program - index.js
    - uses express to serve up the http server and api requests
    - uses nedb as a simple document db to store data - database.db

Frontend uses std html/css/java/bootstrap

DOCKER
    - docker build -t jobHunt .
    - docker run -d -p 3000:3000 jobHunt "$PWD/database.db:/app/database.db
    - browser to localhost:3000