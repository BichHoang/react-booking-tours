import { combineReducers } from 'redux';
import tours from './tours';
import itemEditing from './itemEditing';
import isDisplayBookingForm from "./isDisplayBookingForm";

const appReducers = combineReducers({
    tours,
    itemEditing,
    isDisplayBookingForm
});

export default appReducers;