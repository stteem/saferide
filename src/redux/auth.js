import * as ActionTypes from './ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage.
// we would also want a util to check if the token is expired.
export const Auth = (state = {
        isLoading: false,
        isAuthenticated: localStorage.getItem('token') != undefined ? true : false,
        user: localStorage.getItem('user'),
        imageUrl: localStorage.getItem('imageUrl'),
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: localStorage.getItem('token') != undefined ? true : false,
                errMess: '',
                user: action.payload.user,
                imageUrl: action.payload.imageUrl
            };
        case ActionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: true
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                user: '',
                imageUrl: ''
            };
        default:
            return state
    }
}