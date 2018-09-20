const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found'
  });
});
