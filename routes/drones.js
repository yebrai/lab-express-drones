const express = require('express');
const router = express.Router();
const Drone = require("../models/Drone.model.js")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
 Drone.find()
 .then((response)=>{
    res.render("drones/list.hbs", {
      response
    })
 })
 .catch((error)=>{
  next(error)
 })

});

router.get('/drones/create', (req, res, next) => {
  
  res.render("drones/create-form.hbs")

});

router.post('/drones/create', (req, res, next) => {
  

  Drone.create(req.body)
  .then((response) => {
    
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })


});

router.get('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params
  Drone.findById(id)
  .then((response)=>{
    res.render("drones/update-form.hbs", {
      response
  })
    
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const {id} = req.params
  console.log("Patata")
  Drone.findByIdAndUpdate(id, req.body)
  .then((response)=>{
    console.log("POtotO")
    res.redirect("/drones")
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  
  const { id } = req.params

  Drone.findByIdAndDelete(id)
  .then((response) => {
    res.redirect("/drones")
    console.log()
  })
});

module.exports = router;
