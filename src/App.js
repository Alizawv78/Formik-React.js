import React, { Component } from "react";

import { Route, Routes, Link, } from "react-router-dom";
//Styles
import styles from "./App.module.css"
import AboutUs from "./component/AboutUs";
import NotFound from "./component/NotFound";
import SignUp from "./component/SignUp";

class App extends Component {
 
  render() {
    return (
      <>
        <div>
          <ul className={styles.container}>
            <li className={styles.items}>
              <Link className={styles.link} to="/aboutus">AboutUs</Link>
            </li>
            <li className={styles.items}>
              <Link className={styles.link} to="/signup">SignUp</Link>
            </li>
          </ul>

          <div>
            <Routes>
              <Route path="/products/:id" element={<product />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <hooks />
      </>
    );
    }
}

export default App;
