import { useEffect, useState } from "react";
import API from "../../services/api";

const SubscriberList = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    API.get("/subscribers").then((res) => setSubs(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Newsletter Subscribers
      </h2>

      <ul className="space-y-2">
        {subs.map((s) => (
          <li
            key={s._id}
            className="border p-3 rounded bg-gray-50"
          >
            {s.email}
          </li>
        ))}
      </ul>

      {subs.length === 0 && (
        <p className="text-gray-500 mt-3">
          No subscribers yet
        </p>
      )}
    </div>
  );
};

export default SubscriberList;
