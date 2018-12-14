import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';

export const getAllTourAPI = () => {
    return (dispatch) => {
        return callApi('/tours', 'GET', null).then(res => {
            dispatch(getAllTour(res.data))
        });
    }
}

export const getAllTour = (tours) => {
    return {
        type: Types.GET_ALL_TOUR,
        tours
    }
}

export const getAllCategoryAPI = () => {
    return (dispatch) => {
        return callApi('/categories', 'GET', null).then(res => {
            dispatch(getAllCategory(res.data))
        });
    }
}

export const getAllCategory = (categories) => {
    return {
        type: Types.GET_ALL_CATEGORY,
        categories
    }
}

export const getAllUserAPI = () => {
    return (dispatch) => {
        return callApi('/users', 'GET', null).then(res => {
            dispatch(getAllUser(res.data))
        });
    }
}

export const getAllUser = (users) => {
    return {
        type: Types.GET_ALL_USER,
        users
    }
}

export const openForm = () => {
    return {
        type : Types.OPEN_BOOKING_FORM
    }
}
export const closeForm = () => {
    return {
        type : Types.CLOSE_BOOKING_FORM
    }
}