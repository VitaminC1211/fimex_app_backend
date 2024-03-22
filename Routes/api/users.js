const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

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
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash
                        newUser.save()
                            .then(user => res.send("1"))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})

//@router POST api/users/login
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //Find user by email
    User.findOne({ email })
        //Check for user
        .then(user => {
            if (!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            //Check for password
            bcrypt.compare(password, user.password)
                .then(isMatch=>{
                    if(isMatch){
                        res.send('success!')
                    }else{
                        errors.password = 'Password incorrect'
                        res.status(400).json(errors);
                    }
                });
        });
})

module.exports = router;