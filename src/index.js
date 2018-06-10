const app = require('./config/server.js');

require('./app/routes/news.js')(app);

//starting the server

app.listen(app.get('port'),() => {
  console.log('server on port ', app.get('port'));
});
