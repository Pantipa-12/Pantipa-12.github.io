import "./Index.css";
import "./App.css";
import "./utils";
import "./constants";

import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <div>
        <Menu />
        <div id="heros">
          <Hero />
        </div>
        <div id="interests">
          <Interests />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contacts">
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default App;
