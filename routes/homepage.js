const express = require('express');
const router = express.Router();

// import homepage controller
const homepage_controller = require('../controllers/homepage_controller');


// test url
router.get('/test', homepage_controller.test);

//
router.get('/:id', homepage_controller.details);

module.exports = router;