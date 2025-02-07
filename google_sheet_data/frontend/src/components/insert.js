import React, { useState } from "react";
import axios from "axios";

function Insert() {
  const [formData, setFormData] = useState({ id: "", name: "", age: "" });

  const handleSubmit = async () => {
    await axios.post("/add", formData);
    alert("Contact Added!");
  };

  return (
    <div>
      <input type="text" placeholder="ID" onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="text" placeholder="Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
      <button onClick={handleSubmit}>Add Contact</button>
    </div>
  );
}

export default Insert;