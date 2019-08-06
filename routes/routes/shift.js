const express = require('express')
const router = express.Router()
const Shift = require('../../database/models/shift')

app.post("/tasks", function(req, res) {
    // Create a new user using req.body
    Shift.create(req.body)
      .then(function(dbShift) {
        // If saved successfully, send the the new User document to the client
        res.json(dbShift);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });
  
  app.get("/shift", function(req, res) {
    // Using our Book model, "find" every book in our db
    db.Shift.find({})
      .then(function(dbShift) {
        // If any Books are found, send them to the client
        res.json(dbShift);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });


module.exports = router