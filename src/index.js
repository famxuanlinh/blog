const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3001;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//middleware để xử lý dữ liệu từ form-data
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

//Route
route(app)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})