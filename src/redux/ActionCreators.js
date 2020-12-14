import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseUrl/baseUrl';



export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: response
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}




export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin());

    console.log('creds ', creds);

    return fetch(baseUrl + 'api/v1/auth/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    
    .then(response => response.json())
    .then(response => {
        console.log('response.json', response)
        if (response) {
            // If login was successful, set the token and user detail in local storage
            // for persistence across reloads
            const storage = localStorage.setItem('token', response.token);
            localStorage.setItem('user', response.user);
            localStorage.setItem('email', response.email);
            localStorage.setItem('imageUrl', response.imageUrl);
            console.log('storage', storage)
            // Dispatch the success action
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error("Internal server error");
            //error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};



// Logs the user out

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}


export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('imageUrl');
    dispatch(receiveLogout())
}