const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'Rise',
        city: 'Durham',
        state: 'NC',
        cuisines: 'Donuts & Biscuits',
        pic: '/images/donuts.jpg'
      }, {
        name: "Dame's Chicken & Waffles",
        city: 'Durham',
        state: 'NC',
        cuisines: 'Southern Breakfast',
        pic: '/images/Chicken-Waffles.jpg'
      }];
      
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router;