import { useState } from "react";
import API from "../services/api";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/contact/submit", form);
    alert("Thank you! We’ll contact you shortly.");
    setForm({ fullName: "", email: "", mobile: "", city: "" });
  };

  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Let’s Work Together
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Share your requirements and our experts will help you
            plan the right solution.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Business consultation</li>
            <li>✔ Technical guidance</li>
            <li>✔ Fast response</li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <form onSubmit={submit} className="space-y-4">
            <input className="w-full border p-4 rounded-lg" placeholder="Full Name" required />
            <input className="w-full border p-4 rounded-lg" placeholder="Email Address" required />
            <input className="w-full border p-4 rounded-lg" placeholder="Mobile Number" required />
            <input className="w-full border p-4 rounded-lg" placeholder="City" required />
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700">
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
