import { combineReducers } from 'redux';
import tours from './tours';
import itemEditing from './itemEditing';
import isDisplayBookingForm from "./isDisplayBookingForm";
import currentUser from "./currentUser";

const appReducers = combineReducers({
    tours,
    itemEditing,
    isDisplayBookingForm,
    currentUser
});

export default appReducers;