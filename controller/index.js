const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const route = require('./routes');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.engine('hbs', handlebars({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
