import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div onClick={() => scrollTo("home")}>
          <Logo />
        </div>

        {/* Navigation */}
        <div className="space-x-6 font-medium text-gray-700 flex items-center">
          <button onClick={() => scrollTo("home")} className="hover:text-blue-600">
            Home
          </button>
          <button onClick={() => scrollTo("why")} className="hover:text-blue-600">
            Why Us
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-blue-600">
            About
          </button>
          <button onClick={() => scrollTo("projects")} className="hover:text-blue-600">
            Projects
          </button>
          <button onClick={() => scrollTo("clients")} className="hover:text-blue-600">
            Clients
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-blue-600">
            Contact
          </button>

          {/* Admin Button */}
          <button
            onClick={() => navigate("/admin-login")}
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Admin
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
