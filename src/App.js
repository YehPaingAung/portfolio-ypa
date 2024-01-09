import React, { useState } from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
// import Services from "./components/Services";
import Work from "./components/Work";
// import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="dark:bg-[#1E1E1E] bg-white bg-no-repeat bg-cover overflow-hidden text-[#555555]">
        <Header setDarkMode={setDarkMode} />
        <Banner />
        <Nav />
        <About />
        {/* <Services /> */}
        <Work />
        {/* <Contact /> */}
        <div className="h-[4000px]"></div>
      </div>
    </main>
  );
};

export default App;
