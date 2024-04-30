import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_DETAIL = "GET_DETAIL";
export const GET_BY_NAME = "GET_BY_NAME";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const FETCH_ERROR = "FETCH_ERROR";
export const POST_ACTIVITY_FAIL = "POST_ACTIVITY_FAIL"

export const getAllCountries = () => {
    return async function(dispatch){
        try{
            const {data} = await axios.get('http://localhost:3001/api/countries')
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const getAllActivities = () => {
    return async function(dispatch){
        try{
            const {data} = await axios.get('http://localhost:3001/api/activities')
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const getDetail = (id) => {
    return async function(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/api/countries/${id}`)
            return dispatch({
                type:GET_DETAIL,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const getByName = (name) => {
    return async function(dispatch){
        try{
            const {data} = await axios.get(`http://localhost:3001/api/countries/country/name?name=${name}`)
            return dispatch({
                type: GET_BY_NAME,
                payload: data 
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const postActivity = (payload) => {
    return async function(dispatch){
        try{
            const post = await axios.post('http://localhost:3001/api/activities/post', payload)
            return dispatch({
                type: POST_ACTIVITY,
                payload: post.data
            })
        }
        catch(error){
                dispatch({
                type: POST_ACTIVITY_FAIL,
                payload: error.response.data
            })
        }
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    };
};