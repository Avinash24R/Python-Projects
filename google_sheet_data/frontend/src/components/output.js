import React, { useEffect, useState } from "react";


function Output({data}) {
  if (!data || data.length === 0) {
    return (
      <div>
        <h2>Contacts List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h2>Contacts List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Output;