import { useEffect, useState } from "react";
import API from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Projects</h2>
          <p className="text-gray-600 mt-4">
            A selection of work we’ve delivered for our clients
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p) => (
            <div
              key={p._id}
              className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={
                  p.image
                    ? `http://localhost:5000/${p.image}`
                    : "/project-placeholder.jpg"
                }
                alt={p.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {p.name}
                </h3>
                <p className="text-gray-600 mt-2">
                  {p.description}
                </p>
                <button className="mt-4 text-blue-600 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
