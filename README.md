# scaffold

The template I use for new web applications. It is based on Nodejs/Express for the backend, and handlebars for the frontend.

## Get started

- Clone the project
- install grunt (required for the frontend folder).
- use npm install at the root, and in the frontend project.
- run `grunt buildDev` in the frontend folder
- run launchServer.sh to start the server
- open localhost:3000 in your browser

In order to start developing, the default `grunt` task builds the project and starts a watch.

## Still to do

- There is no database right now.
- The production mode is not yet correctly handled. There is no way to run the server in production mode.
- i18n
- Testing
- I'd like to have some stuff added to the layout:
    - In dev mode, have files added one by one (easier debugging)
    - i18n strings added to html file directly (in layout.hbs)
- Livereload?