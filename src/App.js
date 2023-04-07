import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import ProjectsContainer from "./ProjectsContainer";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <ProjectsContainer />
        </Route>
      </Switch>
    </div>
  );
}
