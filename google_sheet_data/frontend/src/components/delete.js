import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [formData, setFormData] = useState({ id: "" });

  const handleDelete = async () => {
    if (!formData.id) {
      alert("Please enter an ID to delete");
      return;
    }

    try {
      await axios.delete(`/delete/${formData.id}`);
      alert("Contact Deleted Successfully!");
    } catch (error) {
      alert("Error deleting contact. Please check the ID.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ID to delete"
        value = {formData.id}
        onChange={(e) => setFormData({...formData, id: e.target.value})}
      />
      <button onClick={handleDelete}>Delete Contact</button>
    </div>
  );
}

export default Delete;