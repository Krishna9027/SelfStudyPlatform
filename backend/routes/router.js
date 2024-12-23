const express = require("express");
const router = express.Router();
const StudyRoomControllers = require('../controllers/validations/StudyRoomControllers'); // Import controller functions


router.get("/usingcr",async(req,res)=>{
     StudyRoomControllers.sayhello(req,res);
});

router.get("/getAllCourses",async(req,res)=>{
    StudyRoomControllers.getAllCourses(req, res);
})

module.exports = router;