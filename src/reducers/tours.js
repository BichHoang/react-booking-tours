import * as Types from './../constants/ActionType';

var initialState = [];

const tours = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_ALL_TOUR:
            return [...action.tours];
        default: return [...state];
    }
};

export default tours;