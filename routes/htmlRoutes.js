const router = require('express').Router();
const path = require('path');

//make home page route used mini project router.get to get the homepage because it is the first thing the user does before using the app. also used starwars final app to ref
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
//make exercise route

//make stats route




//boilerplate from mini project that is part of what the router variable uses to function properly 
module.exports = router;