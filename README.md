# scaffold

The template I use for new web applications. It is based on Nodejs/Express for the backend, and handlebars for the frontend.

## Get started

- Clone the project
- install grunt (required for the frontend folder).
- use npm install at the root, and in the frontend project.
- you might have to manually add a data folder at the root, and run `mongod --dbpath ./data/db/` the first time (The reason why is to be investigated).
- run `grunt buildDev` or `grunt` (to have watch running) in the frontend folder
- run launchServer.sh to start the server
- open localhost:3000 in your browser

## Internationalization

I have added a very simple internationalization framework, to get me started. The API is pretty simple.
```js
app.i18n.register('en', {
 user: {
  name: 'My name is %{name}',
  logout: 'Logout',
  age: {
    counter: 'age'
    1: 'I am one year old.',
    2: 'I am two years old',
    n: 'I am %{age} years old'
  }
 }
});

app.i18n.translate('user.logout'); // 'Logout'
app.i18n.translate('user.name', {name: 'Bob'}); // 'My name is Bob'

app.i18n.translate('user.age', {age: 1}); // 'I am one year old.'
app.i18n.translate('user.age', {age: 2}); // 'I am two years old.'
app.i18n.translate('user.age', {age: 13}); // 'I am 13 years old.'

app.i18n.setDefault('en'); // sets the default language to English
app.i18n.setLanguage('fr'); // sets the current language to French
```
and you have an internationalization framework in less than 80 lines of code (including comments).

It is also integrated with Handlebars through the i18n helper:
```js
{{i18n string="user.name" name="Bob"}} // 'My name is Bob'
{{i18n string="user.age" age=13}} // 'I am 13 years old.'
```
It also works with variables present in the context
```js
{{i18n string="user.age" age=context.age}} // 'I am 13 years old.'
```

## Still to do

- The production mode is not yet correctly handled. There is no way to run the server in production mode.
- Testing
- I'd like to have some stuff added to the layout:
    - In dev mode, have files added one by one (easier debugging)
- Livereload?
