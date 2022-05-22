// module.exports = [{
//     name: 'Rise',
//     city: 'Durham',
//     state: 'NC',
//     cuisines: 'Donuts & Biscuits',
//     pic: '/images/donuts.jpg'
//   }, {
//     name: "Dame's Chicken & Waffles",
//     city: 'Durham',
//     state: 'NC',
//     cuisines: 'Southern Breakfast',
//     pic: '/images/Chicken-Waffles.jpg'
//   }];

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  pic: {type: String, default: '/images/donuts.jpg'},
  cuisines: { type: String, required: true},
  city: { type: String, default: 'Durham'},
  state: { type: String, default: 'NC'},
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?'],
    max: [new Date().getFullYear(), "Hey, this year is in the future!"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// const Place = mongoose.model('Place', placeSchema);
// module.exports = Place;
module.exports = mongoose.model('Place', placeSchema);