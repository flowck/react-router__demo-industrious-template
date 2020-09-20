import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Views
 */
import Home from "./views/Home";
import Generic from "./views/Generic";
import Elements from "./views/Elements";

/**
 * Components
 */
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <Router>
      <div className="App">
        <Header openMenu={toggleMenu}></Header>
        <Nav menuStatus={isMenuActive} closeMenu={toggleMenu}></Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generic" component={Generic} />
          <Route exact path="/elements" component={Elements} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
