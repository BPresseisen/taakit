const express = require('express')
const router = express.Router()
const User = require('../../models/models/user')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('user.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            console.log(req.body);
            const newUser = new User({
                username: username,
                password: password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                role: req.body.role,
                email: req.body.email,
                mobile: req.body.mobile,
                landline: req.body.landline,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                country: req.body.country,
                clientID: req.body.clientID
            })
            newUser.save((err, savedUser) => {
                if (err) {
                    console.log(err);
                    return res.json(err)
                }
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            role: req.user.role,
            email: req.user.email,
            mobile: req.user.mobile,
            landline: req.user.landline,
            address: req.user.address,
            city: req.user.city,
            state: req.user.state,
            zip: req.user.zip,
            country: req.user.country,
            clientID: req.user.clientID
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router