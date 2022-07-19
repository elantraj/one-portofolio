import React from 'react'
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
 <div>
<NavBar />
 <Home />
 <About />
 <Portfolio />
 <Experience />
 <SocialLinks />
 </div>
  );
}

export default App;
