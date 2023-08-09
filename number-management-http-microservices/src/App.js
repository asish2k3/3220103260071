import "./App.css";
import { fetchurl, geturls, parse_res, sorted_num } from "./Number";
import React, { useState, useEffect } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const urls = geturls();
      const responses = await Promise.all(urls.map(fetchurl));
      const num = await Promise.all(responses.map(parse_res));
      const sortednum = sorted_num(num.flat());

      setNumbers(sortednum);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>number-management-microservices</h1>
        <h2>The numbers are: [{numbers.join(", ")}]</h2>
      </div>
    </div>
  );
}

export default App;
