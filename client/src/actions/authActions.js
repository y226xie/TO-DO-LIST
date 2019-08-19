import axios from 'axios'
import { returnErrors } from './errorActions'

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR ,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ERRORS
} from './types'

//check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({type: USER_LOADING})

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}

//Set up config/headers and token

export const tokenConfig = getState => {
    //Get token from localstoreage
    const token = getState().auth.token

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }
    return config
}