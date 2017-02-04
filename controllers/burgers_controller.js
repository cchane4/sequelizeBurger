var express = require("express");

var router = express.Router();
var burger = require("../models");

// get route -> index
router.get("/", function(req, res) {
     db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
    });
});

// post route -> back to index
router.post("/", function(req, res) {
   db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    });
});


// put route -> back to index
router.put("/:id", function(req, res) {
     db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
});

  


module.exports = router;
