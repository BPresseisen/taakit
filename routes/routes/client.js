const express = require('express')
const router = express.Router()
const Client = require('../../models/models/client')

router.post('/', (req, res) => {
    console.log('client signup');

    
            console.log(req.body);
            const newClient = new Client({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                role: req.body.role,
                mobile: req.body.mobile,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                country: req.body.country,
                userID: req.body.userID
            })
            newClient.save((err, savedClient) => {
                if (err) {
                    console.log(err);
                    return res.json(err)
                }
                res.json(savedClient)
            })
        })