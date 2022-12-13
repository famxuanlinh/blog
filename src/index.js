const path = require("path");
const express = require("express");
//Sử dụng phương thức PUT trong form behaivior
var methodOverride = require("method-override");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3001;

const route = require("./routes");
const db = require("./app/config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

//middleware để xử lý dữ liệu từ form-data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
app.use(methodOverride("_method"));

//http logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

//Route
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
