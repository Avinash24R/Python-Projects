import React, { useState , useEffect } from "react";
import axios from "axios";
import Insert from "./components/insert";
import Update from "./components/update";
import Delete from "./components/delete";
import Filter from "./components/filter";
import Output from "./components/output";

function App() {
  const [tab, setTab] = useState("insert");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const res = await axios.get("/out");
        console.log("Data fetched:", res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  },[]);

  const handleFilter = (data) => {
    setData(data);
  };

  return (
    <div className="container">
      <div className="left">
      {data === null ? (
          <p>Loading...</p>
        ) : (
          <Output data={data} />
        )}
      </div>
      <div className="right">
        <div className="tabs">
          <button onClick={() => setTab("insert")}>Insert</button>
          <button onClick={() => setTab("update")}>Update</button>
          <button onClick={() => setTab("delete")}>Delete</button>
          <button onClick={() => setTab("filter")}>Filter</button>
        </div>
        {tab === "insert" && <Insert />}
        {tab === "update" && <Update />}
        {tab === "delete" && <Delete />}
        {tab === "filter" && <Filter onFilter={handleFilter}/>}
      </div>
    </div>
  );
}

export default App;