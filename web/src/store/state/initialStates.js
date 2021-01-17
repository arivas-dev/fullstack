import { initLoadable } from 'utils/loadable';

export const initialUserState = () => ({
  login: initLoadable(undefined),
  users: initLoadable([]),
  update: initLoadable(undefined),
  register: initLoadable(undefined),
});

export const initialProductState = () => ({
  products: initLoadable([]),
  save: initLoadable(undefined),
  update: initLoadable(undefined),
  delete: initLoadable(undefined),
});