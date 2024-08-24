const express = require("express");
const courseRouter = express.Router();

const {createCourse,getAllcourses,getCourseDetails } = require("../controllers/course");
const {createCategory, getAllCategory, CategoryPageDetails} = require("../controllers/Category");
const {createRatingandReview, getAllratingOfCourse, getAvgRating, getAllrating} = require("../controllers/RatingAndReview");
const {createSection,updateSection,deleteSection} = require("../controllers/sectionCourse");
const {createSubSection,updateSubSection,deleteSubSection} = require("../controllers/subSectionCourse");

// creating all the router for courses
courseRouter.post("/createCourse", createCourse);
courseRouter.get("/getAllcourses", getAllcourses);
courseRouter.get("/getCourseDetails", getCourseDetails);

// creating all the router for rating and review
courseRouter.post("/createRatingAndReview",createRatingandReview);
courseRouter.get("getAllratingOfCourse",getAllratingOfCourse);
courseRouter.get("getAvgRating",getAvgRating);
courseRouter.get("getAllrating",getAllrating);

// creating all the routers for category
courseRouter.post("/createCategory",createCategory);
courseRouter.get("getAllCategory",getAllCategory);
courseRouter.get("CategoryPageDetails",CategoryPageDetails);

// creating all the router for courses sections
courseRouter.post("/createSection", createSection);
courseRouter.put("/updateSection", updateSection);
courseRouter.delete("/deleteSection", deleteSection);

// creating all the router for sub section
courseRouter.post("/createSubSection", createSubSection);
courseRouter.put("/updateSubSection", updateSubSection);
courseRouter.delete("/deleteSubSection", deleteSubSection);

module.exports = courseRouter;