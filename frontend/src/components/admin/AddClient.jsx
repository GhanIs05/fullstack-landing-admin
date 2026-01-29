import { useState } from "react";
import API from "../../services/api";

const AddClient = () => {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("designation", form.designation);
    data.append("description", form.description);
    data.append("image", image);

    await API.post("/clients/add", data);
    alert("Client added");

    setForm({ name: "", designation: "", description: "" });
    setImage(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add Client</h2>

      <form onSubmit={submit} className="space-y-4">
        <input className="border p-3 w-full"
          placeholder="Client Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input className="border p-3 w-full"
          placeholder="Designation"
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
        />

        <textarea className="border p-3 w-full"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input type="file" required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button className="bg-green-600 text-white px-5 py-2 rounded">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
