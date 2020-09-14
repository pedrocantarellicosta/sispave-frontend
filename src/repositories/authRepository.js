import { Repository } from './repository'
import { getAccessToken } from '../services/TokenService'

const resource = path => `/auth/${path}`;

export default {
    async login(credentials) {
        return Repository.post(resource('login'), credentials);
    },
    async logout() {
        return Repository.post(resource('logout'), null, { headers: { authorization: getAccessToken() }});
    },
    async me() {
        return Repository.post(resource('me'), null, { headers: { authorization: getAccessToken() }});
    },
    async fetchUsers() {
        return Repository.get(resource('users'), {
            headers: {
                authorization: getAccessToken(),
            }
        })
    }
}