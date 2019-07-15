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
            const newUser = new User({
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                role: role,
                email: email,
                mobile: mobile,
                landline: landline,
                address: address,
                city: city,
                zip: zip,
                country: country,
                clientID: clientID
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
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
            address: requ.user.address,
            city: req.user.city,
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
        res.send({ msg: 'no patient to log out' })
    }
})

module.exports = router