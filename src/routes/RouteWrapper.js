import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// IMPORT USER-DEFINED COMPONENTS HERE //
import { toast } from "react-toastify";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = true;

  if (isPrivate && !signed) {
    toast.error("Login to open cart");
    return <Redirect to="/" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
