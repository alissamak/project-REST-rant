const router = require('express').Router();

router.get('/', (req, res) => {
    let places = [{
        name: 'Rise',
        city: 'Durham',
        state: 'NC',
        cuisines: 'Southern Breakfast, Brunch',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Bojangles',
        city: 'Durham',
        state: 'NC',
        cuisines: 'Southern Breakfast',
        pic: 'http://placekitten.com/250/250'
      }];
      
    res.render('places/index', {places})
})

module.exports = router;