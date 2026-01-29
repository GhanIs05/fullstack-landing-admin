const Hero = () => {
  return (
    <section
  id="home"
  className="pt-32 pb-28 bg-gradient-to-br from-slate-900 to-blue-900 text-white"
>
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
    
    <div>
      <span className="uppercase text-blue-300 tracking-wide">
        Digital Growth Partner
      </span>

      <h1 className="text-5xl font-bold leading-tight mt-4">
        Build. Launch. <br /> Scale Your Business
      </h1>

      <p className="text-blue-100 mt-6 text-lg">
        Strategy, design, and technology — everything you need to grow online.
      </p>

      <button className="mt-8 bg-orange-500 px-7 py-3 rounded-lg font-semibold hover:bg-orange-600">
        Get Free Consultation
      </button>
    </div>

    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
  <h3 className="text-xl font-semibold mb-6 text-white">
    Request a Callback
  </h3>

  <input
    type="text"
    placeholder="Full Name"
    className="
      w-full mb-4 px-4 py-3
      rounded-lg
      bg-white
      text-gray-800
      placeholder-gray-500
      border border-gray-300
      focus:outline-none
      focus:ring-2
      focus:ring-orange-500
    "
  />

  <input
    type="email"
    placeholder="Email Address"
    className="
      w-full mb-4 px-4 py-3
      rounded-lg
      bg-white
      text-gray-800
      placeholder-gray-500
      border border-gray-300
      focus:outline-none
      focus:ring-2
      focus:ring-orange-500
    "
  />

  <input
    type="tel"
    placeholder="Phone Number"
    className="
      w-full mb-6 px-4 py-3
      rounded-lg
      bg-white
      text-gray-800
      placeholder-gray-500
      border border-gray-300
      focus:outline-none
      focus:ring-2
      focus:ring-orange-500
    "
  />

  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
    Submit
  </button>
</div>


  </div>
</section>

  );
};

export default Hero;
