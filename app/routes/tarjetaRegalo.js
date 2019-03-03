var express = require('express');
var router = express.Router();
const jfs = require("jsonfile");

// get de todas las tarjetas
router.get('/', function (req, res) {
  let data= jfs.readFileSync('./JSON/tarjetaRegalo.json','utf8');
  console.log(data);
  res.send(data);
});
module.exports = router;
