import React from "react";
import { useNavigate, Route, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  const navigate = useNavigate();

  return !isAuthenticated && !loading ? navigate("/login") : <Outlet />;
};

PrivateRoute.prototype = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
