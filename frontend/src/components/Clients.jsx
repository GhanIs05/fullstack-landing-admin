import { useEffect, useState } from "react";
import API from "../services/api";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get("/clients").then((res) => setClients(res.data));
  }, []);

  return (
    <section className="bg-blue-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Happy Clients</h2>
          <p className="text-gray-600 mt-4">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {clients.map((c) => (
            <div
              key={c._id}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={
                  c.image
                    ? `http://localhost:5000/${c.image}`
                    : "/client-placeholder.jpg"
                }
                alt={c.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-6"
              />

              <p className="text-gray-600 italic">
                “{c.description}”
              </p>

              <h4 className="font-bold mt-6">
                {c.name}
              </h4>

              <span className="text-sm text-gray-500">
                {c.designation}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;
