import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPepole] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birtdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPepole([])
          }}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
