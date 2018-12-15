import { combineReducers } from 'redux';
import tours from './tours';
import categories from './categories';
import users from './users';
import isDisplayBookingForm from "./isDisplayBookingForm";
import currentUser from "./currentUser";

const appReducers = combineReducers({
    tours,
    categories,
    users,
    isDisplayBookingForm,
    currentUser
});

export default appReducers;