import { initLoadable } from 'utils/loadable';

export const defaultLoadableData = () => ({ list: [], meta: { per_page: 0, total: 0 } });

export const initialUserState = () => ({
  login: initLoadable(undefined),
  users: initLoadable(defaultLoadableData()),
  update: initLoadable(undefined),
  register: initLoadable(undefined),
});

export const initialProductState = () => ({
  products: initLoadable(defaultLoadableData()),
  save: initLoadable(undefined),
  update: initLoadable(undefined),
  delete: initLoadable(undefined),
  register: initLoadable(undefined),
});