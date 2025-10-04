const express = require("express")
const router = express.Router();
const exceptionz = require("../controller/exceptionz")

router.post("/contactus", exceptionz.contactUs);

module.exports = router;