import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates></Certificates>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
