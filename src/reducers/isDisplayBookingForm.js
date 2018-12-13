import * as Types from './../constants/ActionType';
var initialState = false;

const isDisplayBookingForm = (state = initialState, action) => {
    switch(action.type){
        case Types.OPEN_BOOKING_FORM:
            console.log("OPEN");
            return true;
        case Types.CLOSE_BOOKING_FORM:
            return false;
        default :
            return state;
    }
}

export default isDisplayBookingForm;