import Axios from 'axios';
import Cookie from 'js-cookie';
import {
  USER_SIGN_FAIL,
  USER_SIGN_SUCCESS,
  USER_SIGN_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
} from '../constant/userConstants';

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('/api/users/signin', { email, password });
    dispatch({ type: USER_SIGN_SUCCESS, payload: data });
    const CookieVal = Cookie.set('userInfo', JSON.stringify(data));
    console.log(CookieVal);
  } catch (err) {
    dispatch({ type: USER_SIGN_FAIL, payload: err.message });
  }
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post('/api/users/register', {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    const CookieVal = Cookie.set('userInfo', JSON.stringify(data));
    console.log(CookieVal);
  } catch (err) {
    dispatch({ type: USER_REGISTER_FAIL, payload: err.message });
  }
};
export { signin, register };
