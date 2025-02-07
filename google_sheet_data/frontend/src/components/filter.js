
import React, { useState } from "react";
import axios from "axios";

function Filter({onFilter}) {
  const [criteria, setCriteria] = useState({ id: "", name: "", age: "" });

  const handleFilter = async () => {
    try {
        // Filter out empty criteria
        const validCriteria = Object.fromEntries(
          Object.entries(criteria).filter(([key, value]) => value !== "")
        );
      console.log("Filtering with criteria:", validCriteria);
      const res = await axios.get("/filter", { params: validCriteria });
      const data = res.data;
      console.log("Filtered data:", data);
      onFilter(data);
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="ID" onChange={(e) => setCriteria({ ...criteria, id: e.target.value })} />
      <input type="text" placeholder="Name" onChange={(e) => setCriteria({ ...criteria, name: e.target.value })} />
      <input type="text" placeholder="Age" onChange={(e) => setCriteria({ ...criteria, age: e.target.value })} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;
