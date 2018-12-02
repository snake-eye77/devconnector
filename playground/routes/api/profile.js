const express = require("express");
const router = express.Router();

//@routes    api/profile
//@des       test profile routs
//@access     public

router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
