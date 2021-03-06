import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21124866Reducer from '../features/SignIn21124866/redux/reducers'
import SignIn22124865Reducer from '../features/SignIn22124865/redux/reducers'
import SignIn23124864Reducer from '../features/SignIn23124864/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21124866: SignIn21124866Reducer,
SignIn22124865: SignIn22124865Reducer,
SignIn23124864: SignIn23124864Reducer,

});