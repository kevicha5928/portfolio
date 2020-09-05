import { app } from 'Shared/constants/types';

const initState = {
  activePage: 2,
};

const appState = (state = initState, action) => {
  switch (action.type) {
    case app.changeActivePage:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export { appState };
