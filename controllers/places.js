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

//show places
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else{
    res.render('places/show', {place: places[id], id})
  }
})

//delete places
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if(isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]){
    res.render('error404')
  }
  else{
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router;