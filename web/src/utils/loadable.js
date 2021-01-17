export const initLoadable = data => ({
  isLoading: false,
  firstFetch: true,
  error: undefined,
  data,
});

export const updateLoadable = (loadable, isLoading, error) => {
  loadable.isLoading = isLoading;
  loadable.error = error;
  loadable.firstFetch = false;
  return loadable;
};