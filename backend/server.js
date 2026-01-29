const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(
  cors({
    origin: "*", // later restrict to Vercel URL
  })
);
app.use(express.json());

/* =======================
   DEBUG LOGS
======================= */
console.log("Starting server...");
console.log("Mongo URI:", process.env.MONGO_URI);

/* =======================
   MONGODB CONNECTION
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
  });

/* =======================
   ROUTES
======================= */
const projectRoutes = require("./routes/projectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

/* =======================
   STATIC FILES (IMAGES)
======================= */
app.use("/uploads", express.static("uploads"));

/* =======================
   TEST ROUTE
======================= */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* =======================
   START SERVER (LAST)
======================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
