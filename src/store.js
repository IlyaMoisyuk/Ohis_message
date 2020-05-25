import { createStore } from 'redux';

const INITIAL_STATE = {};


function Data(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_FORM':
            return { ...action.data };
        case "ADD_MESAGE":
            return { ...action.message };
        default:
            return state;
    }
}

const store = createStore(Data);

export default store;