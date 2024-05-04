const router = require("express").Router();

const DealControllers = require('../controllers/DealControllers');


router.post("/createdeal", DealControllers.postDealData);


module.exports = router;