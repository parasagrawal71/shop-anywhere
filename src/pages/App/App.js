import React from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //
import history from "routes/history";
import Routes from "routes/Routes";
import ScrollToTop from "routes/ScrollToTop";
import Toast from "subComponents/toast/Toast";

// IMPORT OTHERS HERE //
import "./App.css";

const App = (props) => {
  const { toastState } = props;

  return (
    <Router history={history}>
      <Toast toastState={toastState} />
      <ScrollToTop />
      <Routes />
    </Router>
  );
};

const mapStateToProps = (store) => {
  return { toastState: store.toastState };
};

export default connect(mapStateToProps)(App);
