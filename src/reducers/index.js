import { combineReducers } from 'redux';
import tours from './tours';
import categories from './categories';
import users from './users';
import itemEditing from './itemEditing';
import isDisplayBookingForm from "./isDisplayBookingForm";

const appReducers = combineReducers({
    tours,
    categories,
    users,
    itemEditing,
    isDisplayBookingForm
});

export default appReducers;