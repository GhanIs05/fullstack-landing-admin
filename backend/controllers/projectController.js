// const Project = require("../models/Project");

// // ADD PROJECT (Admin)
// exports.addProject = async (req, res) => {
//   try {
//     const { name, description } = req.body;

//     const project = new Project({
//       name,
//       description,
//       image: "dummy-image.jpg" // temporary
//     });

//     await project.save();
//     res.status(201).json({ message: "Project added successfully", project });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // GET ALL PROJECTS (Landing Page)
// exports.getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ createdAt: -1 });
//     res.status(200).json(projects);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const Project = require("../models/Project");
const sharp = require("sharp");
const fs = require("fs");

// ADD PROJECT (with image crop)
exports.addProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imagePath = req.file.path;
    const croppedPath = `uploads/cropped-${req.file.filename}`;

    await sharp(imagePath)
      .resize(450, 350)
      .toFile(croppedPath);

    fs.unlinkSync(imagePath);

    const project = new Project({
      name,
      description,
      image: croppedPath,
    });

    await project.save();

    res.status(201).json({ message: "Project added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ THIS EXPORT IS REQUIRED (VERY IMPORTANT)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
