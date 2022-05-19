const db = require('../models');

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/medi-kebabs.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/biscuits.jpg',
    founded: 2020
}])

.then(() => {
    console.log('Success!');
    process.exit();
})
.catch(err => {
    console.log("Fail!", err);
    process.exit();
})