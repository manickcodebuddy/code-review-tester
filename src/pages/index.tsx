import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(search.length > 10) {
      setSearch("Maximum limit reached");
    }
  }, []);
  return (
    <div>
      <h1>This is Code review tester app</h1>
      <p>This is a subtitle</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default HomePage;
