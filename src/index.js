let express = require('express');
let app = express();
let port = 8080;

let options = {
  server: { socketOptions: { keepAlive: 1, connectTiemoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTiemoutMS: 30000 } }
};

app.get("/", (req, res) => res.json({ message: "Hello Node!!" }));

console.log("Listening on port " + port);

app.listen(port);

module.exports = app;
