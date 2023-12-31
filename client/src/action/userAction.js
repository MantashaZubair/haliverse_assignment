import { USER_LIST_SUCCESS,USER_LIST_REQUEST,USER_LIST_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constanse/userConstants";
import axios from "axios"
export const listUser =(page)=>async(dispatch)=>{
try {
    dispatch({type:USER_LIST_REQUEST})
    const {data}=await axios.get(`http://localhost:8080/api/users?page=${page}`)
    dispatch({type:USER_LIST_SUCCESS, payload:data})
} catch (error) {
    dispatch({type:USER_LIST_FAIL, payload:error.response&& error.response.data.message?error.response.data.message:error.message})
}
}

export const create = (first_name,last_name, email, gender,domain) => async (dispatch) => {
    try {
      dispatch({ type: USER_CREATE_REQUEST });
      const config = { headers: { "Contnet-Type": "application/json" } };
      const { data } = await axios.post(
        "http://localhost:8080/api/users",
        { first_name,last_name, email, gender,domain },
        config
      );
      dispatch({
        type: USER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


 export const userdetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST});
        const { data } = await axios.get(`http://localhost:8080/api/users/${id}`);
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: USER_DETAILS_FAIL, payload: error.message });
    }
  };



  export const userupdate = (id,first_name,last_name,email,gender,domain) => async (dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST});
      const { data } = await axios.put(`http://localhost:8080/api/users/${id}`,{id,first_name,last_name, email, gender,domain });
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
    }
  };

