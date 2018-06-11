// obtener el app de server.js
const app = require('./config/server.js');
// obtener news.js y pasar app como parametro
require('./app/routes/news.js')(app);

//starting the server

app.listen(app.get('port'),() => {
  console.log('server on port ', app.get('port'));
});
