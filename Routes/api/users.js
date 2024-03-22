const express = require('express');
const router = express.Router();

//Load User model
const User = require('../../models/User');

//@router POST api/users/register
router.post('/register', (req, res) => {
    // const registerData = req.body;
    // console.log('Received data from client:', registerData.email);
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).send("0");
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save()
                    .then(user => res.send("1"))
                    .catch(err => console.log(err));
            }
        })
})

//@router POST api/users/login
router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    console.log(typeof password)
    //Find user by email
    User.findOne({ email })
        //Check for user
        .then(user => {
            if (!user) {
                return res.send("0");
            }
            console.log(typeof user.password)
            //Check for password
            if (password === user.password) {
                res.send('2'); // Passwords match
            } else {
                res.send('1'); // Passwords do not match
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('An error occurred');
        });
});


module.exports = router;