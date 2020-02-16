import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Browsejob from "./components/Browsejob";
import Candidates from ".//Pages/Candidates";
import JobDetails from "./Pages/JobDetails";
import Elements from "./Pages/Elements";
import Blogs, { Blog } from "./Blog/Blog";
import Contact from "./components/Contact";
import Singleblog from "./Blog/SingleBlog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Layout/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Browsejob">
            <Browsejob />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Candidates">
            <Candidates />
          </Route>
          <Route path="/JobDetails">
            <JobDetails />
          </Route> 
          <Route path="/Elements">
            <Elements />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/SingleBlog">
            <Singleblog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
