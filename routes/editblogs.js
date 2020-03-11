const express = require('express');
const router = express.Router();

router.get('/editblogs', (req, res) => {
  res.render('editblogs.ejs');
});

module.exports = router;
