import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testmonial from "./components/Testmonial";

export default function App() {
  return (
    <div>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased overflow-hidden max-w-7xl mx-auto relative z-10">
        <Hero/>
        <Projects/>
        <About/>
        <Experiance/>
        <Testmonial/>
        <Contact/>
      </main>
    </div>
  )
}