const express = require('express');
const router = express.Router()
const { indexHomePage, pageAbc, cccd } = require('../controller/homeController')


router.get('/', indexHomePage);
router.get('/abc', pageAbc);
router.get('/cccd', cccd);
module.exports = router;