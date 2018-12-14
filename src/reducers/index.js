import { combineReducers } from 'redux';
import tours from './tours';
import categories from './categories';
import itemEditing from './itemEditing';
import isDisplayBookingForm from "./isDisplayBookingForm";

const appReducers = combineReducers({
    tours,
    categories,
    itemEditing,
    isDisplayBookingForm
});

export default appReducers;