import React from "react";
import { Router } from "react-router-dom";
import { connect } from "react-redux";

// IMPORT USER-DEFINED COMPONENTS HERE //
import history from "routes/history";
import Routes from "routes/Routes";
import Toast from "subComponents/toast/Toast";

// IMPORT OTHERS HERE //
import "./App.css";

const App = (props) => {
  const { toastState } = props;

  return (
    <>
      <Toast position={toastState.position} />
      <Router history={history}>
        <Routes />
      </Router>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toastState: state.toastState };
};

export default connect(mapStateToProps)(App);
