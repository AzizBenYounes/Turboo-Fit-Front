import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../ActionType/auth.action.type"
import axios from 'axios'

// REGISTER
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });

    try {
        const result = await axios.post("/api/auth/register", newUser);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/Profile');
    } catch (error) {
        dispatch({
            type: FAIL_AUTH,
            payload: error.response?.data?.errors || [{ msg: "Registration failed" }]
        });
    }
};

// LOGIN
export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });

    try {
        const result = await axios.post("http://localhost:5600/api/auth/login", user);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/Profile');
    } catch (error) {
        dispatch({
            type: FAIL_AUTH,
            payload: error.response?.data?.errors || [{ msg: "Login failed" }]
        });
    }
};

// CURRENT USER
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });

    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        const result = await axios.get("/api/auth/current", config);
        dispatch({ type: CURRENT_AUTH, payload: result.data });
    } catch (error) {
        dispatch({
            type: FAIL_AUTH,
            payload: error.response?.data?.errors || [{ msg: "Unauthorized" }]
        });
    }
};

// LOGOUT
export const logout = (navigate) => (dispatch) => {
    dispatch({ type: LOGOUT_AUTH });
    navigate('/');
};
