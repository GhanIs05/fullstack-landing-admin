const Client = require("../models/Client");
const sharp = require("sharp");
const fs = require("fs");

exports.addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imagePath = req.file.path;
    const croppedPath = `uploads/client-${req.file.filename}`;

    // Crop client image to 150x150
    await sharp(imagePath)
      .resize(150, 150)
      .toFile(croppedPath);

    fs.unlinkSync(imagePath);

    const client = new Client({
      name,
      description,
      designation,
      image: croppedPath,
    });

    await client.save();
    res.status(201).json({ message: "Client added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClients = async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.json(clients);
};
