export const getAccessToken = () => `Bearer ${localStorage.getItem('token')}`;
export const setAccessToken = token => localStorage.setItem('token', `Bearer ${token}`);
export const clearAccessToken = () => localStorage.setItem('token', null);