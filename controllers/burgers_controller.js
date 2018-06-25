var express = require("express");
var router = express.Router();
var burger = require("../models/burger")

//get route to index
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger_data: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  if (req.body.burger_name === "" || undefined) {
    console.log("must enter at least one char");
  } else {
    burger.create(req.body.burger_name, function(data) {
      console.log("router.post burger.create cb data: ")
      console.log(data);
      res.redirect("/");
    });
  }
});

router.put("/burgers/update", function(req, res) {
  var id = req.body.burger_id;
  var devoured = req.body.devoured;
  devoured = devoured == false
    ? true
    : false;
  console.log("dev chng : " + devoured);
  burger.update(id, devoured, function(data) {
    res.redirect("/");
  });
});

module.exports = router;
