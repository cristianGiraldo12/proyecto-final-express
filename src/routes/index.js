const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next){
    res.render("index", { title: "canciones"})
});

module.exports = router;