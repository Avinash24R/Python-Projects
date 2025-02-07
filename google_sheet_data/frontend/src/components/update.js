import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [formData, setFormData] = useState({ id: "", name: "", age: "" });

  const handleSubmit = async () => {
    await axios.put(`/update/${formData.id}`, formData);
    alert("Contact Updated!");
  };

  return (
    <div>
      <input type="text" placeholder="ID (existing)" onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
      <input type="text" placeholder="New Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="text" placeholder="New Age" onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
      <button onClick={handleSubmit}>Update Contact</button>
    </div>
  );
}

export default Update;