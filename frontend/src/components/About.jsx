const About = () => {
  return (
    <section className="bg-slate-100 py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg p-14 text-center">
          <span className="uppercase tracking-wide text-blue-600 font-semibold">
            About Us
          </span>

          <h2 className="text-4xl font-bold mt-4 mb-6 text-gray-900">
            A Team Focused on Real Results
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We are a multidisciplinary team of designers, developers, and
            strategists committed to building meaningful digital experiences.
            Our approach combines creativity, technology, and data-driven
            insights to help businesses grow sustainably.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold">10+ Projects</h3>
              <p className="text-gray-500 mt-2">
                Successfully delivered solutions
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Trusted Clients</h3>
              <p className="text-gray-500 mt-2">
                Long-term partnerships built
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Modern Stack</h3>
              <p className="text-gray-500 mt-2">
                React, Node, MongoDB & Cloud
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
