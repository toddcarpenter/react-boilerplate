# React Boilerplate 2

# install dependencies
npm install

# run server
node server.js OR npm start (added to package.json)

# webpack
Add alias' to the webpack.config for each component. This allows us to reference that alias variable instead of using relative paths to that component for each use.
$ webpack
OR
$ webpack -w
to keep it running

# Heroku CLI
Install [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
Under "scripts" in package.json is how we tell Heroku how to start our app "start": "node server.js"

To push to heroku server
```
gut push heroku master
```

To view on heroku server in browser
```
heroku open
```

# Foundation Docs
Using the [foundation css framework](https://foundation.zurb.com/sites/docs/)
