import { AuthActionType } from "./type";

import axios from 'axios'

export const SignupAuthAction = (userState, history) => {
    return async (dispatch) => {
        try {
            const {data}= await axios.post("/auth/signup", userState);
            
            const newUser = {
                expiresIn : data.expiresIn,
                token : data.token,
                name : data.data.user.name,
                email : data.data.user.email,
                contactNumber : data.data.user.contactNumber
            } 
            dispatch({
                type : AuthActionType.SIGNUP_SUCCESS,
                payload : newUser
            })
            history.push('/dashboard')
        } catch (error) {
            if(error.message){
            dispatch({
                type : AuthActionType.SIGNUP_FAIL,
                payload : error.message
            })
        }
        }
    }
}

export const LoginAuthAction = (loginState, history) => {
    return async (dispatch) => {
        try {
            const {data}= await axios.post("/auth/login", loginState);
            
            const newUser = {
                expiresIn : data.expiresIn,
                token : data.token,
                name : data.data.user.name,
                email : data.data.user.email,
                contactNumber : data.data.user.contactNumber
            } 
            dispatch({
                type : AuthActionType.LOGIN_SUCCESS,
                payload : newUser
            })
            history.push('/dashboard')
        } catch (error) {
            if(error.message){
                dispatch({
                    type : AuthActionType.SIGNUP_FAIL,
                    payload : error.message
                })
            }
        }
    }
}