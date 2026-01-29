const Subscriber = require("../models/Subscriber");

// SUBSCRIBE EMAIL
exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL SUBSCRIBERS (Admin)
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
