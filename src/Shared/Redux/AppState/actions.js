import { app } from 'Shared/constants/types';

export const changeActivePage = (page) => ({
  type: app.changeActivePage,
  payload: page,
});
