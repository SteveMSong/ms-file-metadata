var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');
var upload = multer({dest: 'get-file-size/'})

var port = process.env.PORT || 5000;
app.listen(port);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/get-file-size', upload.single('file-check'), function (req, res, next) {
  res.json({
    filename: req.file.originalname,
    size: req.file.size
  });
})

// <form action="/get-file-size" method="post" enctype="multipart/form-data">
//   <input type="file" name="file"><br>
//   <input type="submit">
// </form>


