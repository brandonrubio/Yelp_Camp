var express = require('express');
var router = express.Router();

// Campground Model
var Campground = require('../../models/Campground');

// route GET api/campgrounds
// desc Get all items
// access public
router.get('/', function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if (err) {
      console.log(err);
    }
    else {
      { campgrounds, res.json(campgrounds) };
    }
  });
});

// route POST api/campgrounds
// desc Create a campground
// access Public
router.post('/', function(req, res) {
  var newCampground = new Campground({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description
  });

  newCampground.save({}, function(err, newCampground) {
    if (err) {
      console.log(err);
    }
    else {
      { newCampground, res.json(newCampground) };
    }
  });
});

// route DELETE api/campgrounds/id
// desc Delete a campground
//access public
router.delete('/:id/', function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(404).json({ success: false});
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
