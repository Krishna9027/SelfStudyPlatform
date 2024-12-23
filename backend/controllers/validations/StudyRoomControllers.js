// const courseSchema = require("../database/courseSchema");

const StudyRoomTool = require("../functions/StudyRoomControllers");

exports.sayhello = (req,res)=>{
    try{
        res.send("hello hello hi hi");
    }  catch (err){
          console.log(err);
    }
}

exports.getAllCourses = async(req,res)=>{
    var response;
    try {
        response = await StudyRoomTool.getAll();
    } catch (error) {
        console.log(error);
    }
    res.send(response);
}
