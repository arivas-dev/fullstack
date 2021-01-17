const endPoints = {
  login: {
    login: 'http://127.0.0.1:8000/api/v1/login',
    logout: 'http://127.0.0.1:8000/api/v1/logout',
  },
  products: {
    retrieve: 'http://127.0.0.1:8000/api/v1/products',
    save: 'http://127.0.0.1:8000/api/v1/products',
    update: (productId) => `http://127.0.0.1:8000/api/v1/products/${productId}`,
    delete: (productId) => `http://127.0.0.1:8000/api/v1/products/${productId}`,
  },
  users: {
    retrieve: 'http://127.0.0.1:8000/api/v1/users',
    save: 'http://127.0.0.1:8000/api/v1/users',
    update: (userId) => `http://127.0.0.1:8000/api/v1/users/${userId}`,
  }
};
