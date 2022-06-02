import apiAxios from './axios';

const prefix = '/students';

export const getStudents = () => apiAxios.get(prefix);

export const getStudent = (id) => apiAxios.get(`${prefix}/${id}`);

export const deleteStudent = (id) => apiAxios.delete(`${prefix}/${id}`);