const express = require("express");
const userroute = require('./user');
const router = express.Router();

// Route for '/user'
router.use('/user', userroute);

// Route for '/'
router.get('/', (req, res) => {
  res.send("Hello World");
});

module.exports = router;
