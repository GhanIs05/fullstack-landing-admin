import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddProject from "../components/admin/AddProject";
import AddClient from "../components/admin/AddClient";
import ContactList from "../components/admin/ContactList";
import SubscriberList from "../components/admin/SubscriberList";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("clients");

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-700">
          Admin Panel
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActive("projects")}
            className={`w-full text-left px-4 py-3 rounded ${
              active === "projects" ? "bg-slate-700" : "hover:bg-slate-800"
            }`}
          >
            ➕ Add Project
          </button>

          <button
            onClick={() => setActive("clients")}
            className={`w-full text-left px-4 py-3 rounded ${
              active === "clients" ? "bg-slate-700" : "hover:bg-slate-800"
            }`}
          >
            ➕ Add Client
          </button>

          <button
            onClick={() => setActive("contacts")}
            className={`w-full text-left px-4 py-3 rounded ${
              active === "contacts" ? "bg-slate-700" : "hover:bg-slate-800"
            }`}
          >
            📩 Contact Submissions
          </button>

          <button
            onClick={() => setActive("subscribers")}
            className={`w-full text-left px-4 py-3 rounded ${
              active === "subscribers" ? "bg-slate-700" : "hover:bg-slate-800"
            }`}
          >
            📧 Newsletter Subscribers
          </button>
        </nav>

        <div className="p-4 border-t border-slate-700 space-y-2">
          <button
            onClick={() => navigate("/")}
            className="w-full border px-4 py-2 rounded hover:bg-slate-800"
          >
            Home
          </button>

          <button
            onClick={logout}
            className="w-full bg-red-600 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-10 py-8 overflow-y-auto">

        {active === "projects" && (
          <Section title="Add New Project">
            <AddProject />
          </Section>
        )}

        {active === "clients" && (
          <Section title="Add New Client">
            <AddClient />
          </Section>
        )}

        {active === "contacts" && (
          <Section title="Contact Form Submissions">
            <ContactList />
          </Section>
        )}

        {active === "subscribers" && (
          <Section title="Newsletter Subscribers">
            <SubscriberList />
          </Section>
        )}

      </main>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-8 w-full">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    {children}
  </div>
);

export default AdminPanel;
