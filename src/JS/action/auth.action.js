import { CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../ActionType/auth.action.type";
import api from "../api"; // <-- using your API helper

// REGISTER
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        console.log(newUser);

        const result = await api.post("/auth/register", newUser);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/Profile');
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response?.data?.errors });
    }
};

// LOGIN
export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    console.log(user);
    try {
        const result = await api.post("/auth/login", user);
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/Profile');
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response?.data?.errors });
    }
};

// CURRENT USER
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        let config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };

        const result = await api.get("/auth/current", config);
        dispatch({ type: CURRENT_AUTH, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response?.data?.errors });
    }
};

// LOGOUT
export const logout = (navigate) => (dispatch) => {
    dispatch({ type: LOGOUT_AUTH });
    navigate('/');
};
