import {
  combineReducers,
} from 'redux';

import {
  firebaseStateReducer,
} from 'react-redux-firebase';


export const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
});