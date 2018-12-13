import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';

export const actFetchtoursRequest = () => {
    return (dispatch) => {
        return callApi('/tours', 'GET', null).then(res => {
            dispatch(actFetchtours(res.data));
        });
    }
}

export const actFetchtours = (tours) => {
    return {
        type: Types.FETCH_TOURS,
        tours
    }
}

export const actAddtourRequest = (tour) => {
    return (dispatch) => {
        return callApi('/tours', 'POST', tour).then(res => {
            dispatch(actAddtour(res.data));
        });
    }
}

export const actAddtour = (tour) => {
    return {
        type: Types.ADD_TOUR,
        tour
    }
}

export const actUpdatetourRequest = (tour) => {
    return (dispatch) => {
        return callApi(`/tours/${tour.id}`, 'PUT', tour).then(res => {
            if (res) {
                dispatch(actUpdatetour(res.data));
            }
        });
    }
}

export const actUpdatetour = (tour) => {
    return {
        type: Types.UPDATE_TOUR,
        tour
    }
}

export const actDeletetourRequest = (id) => {
    return (dispatch) => {
        return callApi(`/tours/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeletetour(id));
        });
    }
}

export const actDeletetour = (id) => {
    return {
        type: Types.DELETE_TOUR,
        id
    }
}

export const actGettourRequest = (id) => {
    return dispatch => {
        return callApi(`/tours/${id}`, 'GET', null).then(res => {
            dispatch(actGettour(res.data))
        });
    }
}

export const actGettour = (tour) => {
    return {
        type : Types.EDIT_TOUR,
        tour
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