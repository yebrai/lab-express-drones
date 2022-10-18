const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model.js");
// require the Drone model here

//con then
// router.get("/drones", (req, res, next) => {
//   // Iteration #2: List the drones
//   // ... your code here
//   Drone.find()
//     .then((response) => {
//       res.render("drones/list.hbs", {
//         response,
//       });
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

//con async await
router.get("/drones", async (req, res, next) => {
  try {
    let response = await Drone.find();
    await res.render("drones/list.hbs", {
      response,
    });
  } catch (err) {
    next(err);
  }
});
router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

//con Then
// router.post('/drones/create', (req, res, next) => {

//   Drone.create(req.body)
//   .then((response) => {

//     res.redirect("/drones")
//   })
//   .catch((err) => {
//     next(err)
//   })

// });

// con async await
router.post("/drones/create", async (req, res, next) => {
  try {
    console.log("creando drone");
    Drone.create(req.body);
    await res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

// router.get("/drones/:id/edit", (req, res, next) => {
//   const { id } = req.params;
//   Drone.findById(id).then((response) => {
//     res.render("drones/update-form.hbs", {
//       response,
//     });
//   });
// });

//con async await
router.get("/drones/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    let response = await Drone.findById(id);
    await res.render("drones/update-form.hbs", { response });
  } catch (err) {
    next(err);
  }
});

//con Then
// router.post("/drones/:id/edit", (req, res, next) => {
//   const { id } = req.params;
//   console.log("Patata");
//   Drone.findByIdAndUpdate(id, req.body).then((response) => {
//     console.log("POtotO");
//     res.redirect("/drones");
//   });
// });

//con Async Await
router.post("/drones/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Drone.findByIdAndUpdate(id, req.body);
    console.log(req.body);
    await res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

//con Then
// router.post("/drones/:id/delete", (req, res, next) => {
//   const { id } = req.params;

//   Drone.findByIdAndDelete(id).then((response) => {
//     res.redirect("/drones");
//     console.log();
//   });
// });

//Con Asyn Await
router.post("/drones/:id/delete", async (req, res, next) => {
  const { id } = req.params;
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect("/drones");
    console.log();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
