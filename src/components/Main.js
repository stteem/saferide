import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import MenuAppBar from './AppBar';
import SignIn from './SignIn';
import { loginUser, logoutUser } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser())
});



class Main extends Component {


  componentDidMount(){

    console.log('Component DID MOUNT!')

  }



	render() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }} />
      )} />
    );

    console.log('auth ',this.props.auth)

		return(
			<div>
        <MenuAppBar isAuthenticated={this.props.auth.isAuthenticated} logoutUser={this.props.logoutUser}
                    user={this.props.auth.user} imageUrl={this.props.auth.imageUrl}
        />
				<Switch>
				    <PrivateRoute path="/home" component={() =>  <Home /> } />
            <Route path="/login" component={() =>  <SignIn loginUser={this.props.loginUser} /> } />
            <Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));