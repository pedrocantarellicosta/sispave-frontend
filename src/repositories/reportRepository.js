import { Repository } from './repository'
import RequestHeaderBuilder from './helpers/requestHeaderBuilder'

const resource = (path = '') => `/records/${path}`;

export default {
    async list(page = 1) {
        return Repository.get(resource(`?page=${page}`), new RequestHeaderBuilder().withAuth());
    },
    async listSchool(id) {
        return Repository.get(resource(`reports/${id}`), new RequestHeaderBuilder().withAuth());
    },
    async listSchoolAllData(id) {
        return Repository.get(resource(`users/${id}`), new RequestHeaderBuilder().withAuth());
    },
    async listViolenceAllData(id) {
        return Repository.get(resource(`violences/${id}`), new RequestHeaderBuilder().withAuth());
    },
    async listNeighborhoodAllData(id) {
        return Repository.get(resource(`neighborhoods/${id}`), new RequestHeaderBuilder().withAuth());
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