import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent
};
