import { combineReducers } from 'redux';

import reducer from './reducer';

const rootReducer = combineReducers({

    airline: reducer,

});

export default rootReducer;
