import { initLoadable } from 'utils/loadable';

export const initialUserState = () => ({
  login: initLoadable(undefined),
  users: initLoadable({ list: [], meta: { from: 0, to: 0, total: 0 } }),
  update: initLoadable(undefined),
  register: initLoadable(undefined),
});

export const initialProductState = () => ({
  products: initLoadable({ list: [], meta: { from: 0, to: 0, total: 0 } }),
  save: initLoadable(undefined),
  update: initLoadable(undefined),
  delete: initLoadable(undefined),
});