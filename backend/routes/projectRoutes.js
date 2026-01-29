const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  addProject,
  getProjects,
} = require("../controllers/projectController");

// ADD project (with image)
router.post("/add", upload.single("image"), addProject);

// GET all projects
router.get("/", getProjects);

module.exports = router;
