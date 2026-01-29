const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  addClient,
  getClients,
} = require("../controllers/clientController");

router.post("/add", upload.single("image"), addClient);
router.get("/", getClients);

module.exports = router;
