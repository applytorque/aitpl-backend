const router = require("express").Router();
const userRoute = require("./userRoutes");
const historyRoute = require("./historyRoutes");
const poolRoute = require("./createPool");
const dealRoute = require('./DealRoutes');
const kycRoute = require('./kycRoutes');
const imageRoute = require('./imageRoute')



router.use("/user", userRoute);
router.use("/history", historyRoute);
router.use("/pool", poolRoute);
router.use("/deals", dealRoute);
router.use("/kyc", kycRoute);
router.use("/image_upload", imageRoute);


module.exports = router;
