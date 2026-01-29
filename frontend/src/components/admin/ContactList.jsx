import { useEffect, useState } from "react";
import API from "../../services/api";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contact").then((res) => setContacts(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Contact Form Submissions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Mobile</th>
              <th className="p-3 border">City</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="text-center">
                <td className="p-3 border">{c.fullName}</td>
                <td className="p-3 border">{c.email}</td>
                <td className="p-3 border">{c.mobile}</td>
                <td className="p-3 border">{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {contacts.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No contact submissions yet
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
