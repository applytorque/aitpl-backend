const router = require("express").Router();
const userRoute = require("./userRoutes");
const historyRoute = require("./historyRoutes");
const poolRoute = require("./createPool");


router.use("/user", userRoute);
router.use("/history", historyRoute);
router.use("/pool", poolRoute);


module.exports = router;
