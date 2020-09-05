import { combineReducers } from 'redux';
// actions
import * as appActions from './AppState/actions';

// reducers
import { appState } from './AppState/reducers';

const allActions = { appActions };

const rootReducer = combineReducers({
  appState,
});

export { allActions, rootReducer };
