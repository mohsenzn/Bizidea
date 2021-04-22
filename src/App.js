import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route   path="/about" component={About} />
          <Route   path="/services" component={Services} />
          <Route   path="/project" component={Projects} />
          <Route   path="/blog" component={Blogs} />
          <Route  path="/contact" component={Contact} />
          <Route  component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
