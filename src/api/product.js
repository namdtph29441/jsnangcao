import apiAxios from './axios';

const prefix = '/products';

export const getProducts = () => apiAxios.get(prefix);

export const getProduct = (id) => apiAxios.get(`${prefix}/${id}`);

export const deleteProduct = (id) => apiAxios.delete(`${prefix}/${id}`);

export const createProduct = (data) => apiAxios.post(prefix, data);