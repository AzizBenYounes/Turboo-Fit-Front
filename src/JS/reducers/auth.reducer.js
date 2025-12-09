//Import 

import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../ActionType/auth.action.type";



//the initial state
const initialState = {
    isLoad: false,
    user:{},
    error:[],
    success:[],
    isAuth: false,
};
//the pure function
const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_AUTH: return{...state, isLoad:true };
        case SUCCESS_AUTH: 
        localStorage.setItem("token", payload.token)
        console.log(payload);
        return {...state, isLoad: false, user:payload.user, success:payload.success, isAuth:true };
        case CURRENT_AUTH: return {...state, isLoad:false, user:payload, isAuth:true };
        case FAIL_AUTH: return {...state, isLoad:false, errors:payload};
        case LOGOUT_AUTH: 
        localStorage.removeItem("token")
        return { isLoad:false, 
                user:{},
                error:[],
                success:[],
                isAuth: false,}
        default: 
        return state;
            }
            };
            

export default authReducer;