const router = require("express").Router();

const uploadImage = require('../controllers/imageController');


router.post("/", uploadImage.uploadImage);


module.exports = router;