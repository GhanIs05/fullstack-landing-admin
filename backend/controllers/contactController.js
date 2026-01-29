const Contact = require("../models/Contact");

// SUBMIT CONTACT FORM
exports.submitContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    const contact = new Contact({
      fullName,
      email,
      mobile,
      city
    });

    await contact.save();
    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL CONTACTS (Admin)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
