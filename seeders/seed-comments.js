const db = require('../models');

//to use await, we need an async fucntion.
async function seed(){
    //get the db.Place, H-Tahi-ML
    let place = await db.Place.findOne({name: 'H-Thai-ML'})

    //create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended',
    })
    //add comment to the place's comment array
    place.comments.push(comment.id);
    
    //save the place now that it has comment
    await place.save()

    //exit process
    process.exit();
}
seed();