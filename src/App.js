import Navbar from "./Componunts/NavBar/navbar";  
import Intro from "./Componunts/Intro/intro"; 
import Skills from "./Componunts/Skills/skills";
import Works from "./Componunts/Works/works";
import Project from "./Componunts/Project/project";
import Contact from "./Componunts/Contact/contact";
import Footer from "./Componunts/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
  );
}

export default App;
