import axios from "axios";
import authActions from "./auth-actions";
import { registerError, registerRequest, registerSuccess } from "./auth-selectors";

axios.defaults.baseURL = "http://?????????????????";

const token = {};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("users/signup", credentials);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(response.registerError(error));
  }
};

const logIn = (credentials) => (dispatch) => {};

const logOut = (credentials) => (dispatch) => {};

const getCurrentUser = (credentials) => (dispatch) => {};
