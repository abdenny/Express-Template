const express = require('express');
const router = express.Router();

router.get('/blogs', (req, res) => {
  res.render('blogs.ejs');
});

module.exports = router;
