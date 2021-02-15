import React from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import { useHistory, useLocation } from 'react-router-dom';
import CircularIndeterminate from './Loading';
import { Button } from 'reactstrap';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{color:'white'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://twitter.com/uwemuke">
        Uwem Uke
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(15),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const responseGoogle = async (response) => {

    console.log(response);

    if (response.tokenId) {
        await props.loginUser({
          token: response.tokenId, 
          email: response.profileObj.email,
          name: response.profileObj.name,
          firstName: response.profileObj.givenName,
          imageUrl: response.profileObj.imageUrl
        });

        // return user to previous path if google account has been verified in the
        //server and a token returned and stored in localStorage
        return localStorage.getItem('token') ? history.replace(from) : null;
    }
  }

  if (props.isLoading ) {
    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="spinner">
          <CircularIndeterminate />
        </div>
      </Container>
    );
  }
  else{

    return (
      <div className='signin-background'>
      <div id='butn-div'>
        <h5 id='logo-div'>Safe Ride</h5>
        <Button className="butn ml-auto"> 
            For Drivers
        </Button>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{color:'white'}}>
            Sign in
          </Typography>
        </div>
        
        <div style={{marginTop: '10px'}}>
          <GoogleLogin
            className="loginbtn"
            clientId="388094655941-pdi64b6g9p04o38v87dg05k440l8sv3h.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            theme="dark"
            responseType="code,token"
          >
          <div className="loginspan">
            <span>
              <Typography component="h1" variant="body2">
                Sign in with Google
              </Typography>
            </span>
          </div>
          </GoogleLogin>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      </div>
    );
  }
}