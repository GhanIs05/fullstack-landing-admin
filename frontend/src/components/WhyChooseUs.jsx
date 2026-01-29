const WhyChooseUs = () => {
  return (
    <section
  id="why"
  className="py-24 bg-gray-50"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-14">
      Why Businesses Choose Us
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        { title: "ROI Driven", desc: "Every solution is focused on measurable results." },
        { title: "Clean Design", desc: "Modern UI that users love to interact with." },
        { title: "Growth Strategy", desc: "We think long-term, not just delivery." },
      ].map((item) => (
        <div
          key={item.title}
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default WhyChooseUs;
