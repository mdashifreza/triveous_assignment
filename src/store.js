import { createStore } from 'redux';

// Define your initial state
const initialState = {
    newsData: [],
    newsUserName: '',
};

// Define your reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, newsData: action.payload };
        case 'SET_USER_NAME':
            return { ...state, newsUserName: action.payload };
        default:
            return state;
    }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
