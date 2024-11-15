const express = require('express')
const router = express.Router()
const {getName,getHobby,getDream} = require('../controllers/controllers')

//@desc Get name
//@route: GET /name
//@access Public
router.get('/name', getName);
  
//@desc Get hobby
//@route: GET /hobby
//@access Public
router.get('/hobby', getHobby);
  
//@desc Get dream
//@route: GET /dream
//@access Public
router.get('/dream', getDream);

module.exports = router