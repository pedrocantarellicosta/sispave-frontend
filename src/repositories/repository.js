import axios from 'axios'
import store from '@/store/'
import { SET_LOADER } from '@/store/types/mutation-types'

const baseDomain = process.env.NODE_ENV === 'production' ? 
    `${window.location.protocol}//production.com` :
    `${window.location.protocol}//localhost:8000`;

const baseURL = `${baseDomain}/api`;

/**
 * Singleton dedicated to fetch API calls
 */
const Repository = axios.create({ 
    baseURL,
});
/* eslint-disable */ 
Repository.interceptors.request.use(req => {
    store.commit(SET_LOADER, true);
    return req;
}, err => {
    store.commit(SET_LOADER, false);
});

Repository.interceptors.response.use(res => {
    store.commit(SET_LOADER, false);
    return res;
}, err => {
    store.commit(SET_LOADER, false);
})
/* eslint-enable */
export { Repository };