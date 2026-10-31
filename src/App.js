import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const libraryLabel = useMemo(
    () => (category === "All" ? "Every essential, in one place" : category),
    [category]
  );

  return (
    <div className="site-shell">
      <Navbar category={category} onCategoryChange={setCategory} search={search} onSearchChange={setSearch} />
      <main>
        {!search.trim() && <Hero onExplore={() => document.querySelector("#library")?.scrollIntoView({ behavior: "smooth" })} />}
        <Stacks category={category} onCategoryChange={setCategory} search={search} onClearSearch={() => setSearch("")} libraryLabel={libraryLabel} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
