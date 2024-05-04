const router = require("express").Router();

const KYCControllers = require('../controllers/kycControllers');


router.post("/createkyc", KYCControllers.postKYCData);


module.exports = router;