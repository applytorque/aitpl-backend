const router = require("express").Router();
const userRoute = require("./userRoutes");
const historyRoute = require("./historyRoutes");
const poolRoute = require("./createPool");
const dealRoute = require('./DealRoutes')



router.use("/user", userRoute);
router.use("/history", historyRoute);
router.use("/pool", poolRoute);
router.use("/deals", dealRoute);


module.exports = router;
