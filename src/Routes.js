import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory as browserHistory } from "history";

import Landing from "./pages/Landing";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router history={browserHistory}>
      <Routes>
        <Route path="/spacestagram" exact element={<Landing />} />
        <Route path="/spacestagram/home" exact element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
