const router = require('express').Router();
const places = require('../models/places');

//get places
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

//get new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

//post new place
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://placekitten.com/100/100'
  }
  if (!req.body.city) {
    req.body.city = 'Durham'
  }
  if (!req.body.state) {
    req.body.state = 'NC'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router;