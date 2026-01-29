import { useState } from "react";
import API from "../../services/api";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    await API.post("/projects/add", formData);
    alert("Project added");

    setName("");
    setDescription("");
    setImage(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Add Project
      </h2>

      <form
        onSubmit={submit}
        className="space-y-4"
      >
        <input
          className="border p-2 w-full"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
