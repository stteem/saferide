import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, matchPath } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';
import MenuAppBar from './AppBar';
import SignIn from './SignIn';


const mapStateToProps = state => {
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    
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
              pathname: '/signin',
              state: { from: props.location }
            }} />
      )} />
    );


		return(
			<div>
        <MenuAppBar auth={this.props.auth.isAuthenticated}/>
				<Switch>
				    <PrivateRoute path="/home" component={() =>  <Home /> } />
            <Route path="/signin" component={() =>  <SignIn /> } />
            <Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));