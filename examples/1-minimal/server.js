import express from "express";

const port = 3010;
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, () => {
  console.log(`🚀 Minimal example listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})
