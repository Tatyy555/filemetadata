var express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

// My answer starts here...
app.use(fileUpload());

app.post("/api/fileanalyse/", (req, res) => {
  console.log(req.files)
  let answer = {}
  answer["name"] = req.files.upfile.name;
  answer["type"] = req.files.upfile.mimetype;
  answer["size"] = req.files.upfile.size;

  res.setHeader('content-type','application/json; charset=utf-8'); 

  res.json(answer)
})

