import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import isDisplayBookingForm from "./isDisplayBookingForm";

const appReducers = combineReducers({
    products,
    itemEditing,
    isDisplayBookingForm
});

export default appReducers;