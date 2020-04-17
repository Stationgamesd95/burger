
var express = require("express");
var exphbs = require("express-handlebars");


var app = express();

var PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

module.exports = routes;

var burgers = [
  { name: "chicken burger"},
  { name: "shrimp burger"},
  { name: "veggie burger"},
];

app.get("/burgers/:name", function(req, res) {
  for (var i = 0; i < burgers.length; i++) {
    if (burgers[i].name === req.params.name) {
      return res.render("burgers", burgers[i]);
    }
  }
});

app.get("/burgers", function(req, res) {
  res.render("bgs", { bgs: burgers });
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
