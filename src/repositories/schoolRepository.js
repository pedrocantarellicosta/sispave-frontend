import { Repository } from './repository'
import RequestHeaderBuilder from './helpers/requestHeaderBuilder'

const resource = (path = '') => `/users/${path}`;

export default {
    async list(page = 1) {
        return Repository.get(resource(`?page=${page}`), new RequestHeaderBuilder().withAuth());
    },
    async fetchSchool(id) {
        return Repository.get(resource(id), new RequestHeaderBuilder().withAuth());
    },
    async delete(id) {
        return Repository.delete(resource(id), new RequestHeaderBuilder().withAuth());
    },
    async edit(id, data) {
        return Repository.put(resource(id), data, new RequestHeaderBuilder().withAuth());
    },
    async create(data) {
        return Repository.post(resource(''), data, new RequestHeaderBuilder().withAuth());
    }
}