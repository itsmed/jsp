import {
  createStore,
  compose,
} from 'redux';

import {
  reactReduxFirebase,
} from 'react-redux-firebase';

import { firebaseConfig } from './firebase_config';
import { rootReducer } from './reducers';

const createStoreWithMiddlewares = compose(
  reactReduxFirebase(firebaseConfig, {
    menu: 'menu'
  }),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__RED jUX_DEVTOOLS_EXTENSION__()
)(createStore);

export const store = createStoreWithMiddlewares(rootReducer);