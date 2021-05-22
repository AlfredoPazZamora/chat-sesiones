let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = require('./routes');
app.use('/', router);

app.listen(3000, function () {
  console.log("Puesto en marcha el server en puerto 3000");
});
