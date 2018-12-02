const express = require("express");
const router = express.Router();

//@routes    api/posts
//@des       test posts routs
//@access     public

router.get("/test", (req, res) => res.json({ msg: "posts works" }));

module.exports = router;
