import { useState } from "react";
import API from "../services/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/subscribers/subscribe", { email });
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-32">
      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>

        <p className="text-blue-200 text-lg mb-10">
          Subscribe to receive updates, insights, and news from our team.
        </p>

        {/* Form */}
        <form
          onSubmit={submit}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="
              w-full sm:w-96
              px-5 py-4
              rounded-lg
              bg-white
              text-gray-800
              placeholder-gray-500
              border border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm text-blue-300 mt-6">
          No spam. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
};

export default Newsletter;
