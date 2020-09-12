import { Repository } from './repository'
import RequestHeaderBuilder from './helpers/requestHeaderBuilder'

const resource = (path = '') => `/challenges/${path}`;
const headers = new RequestHeaderBuilder()
    .withAuth(localStorage.getItem('token'));

export default {
    async createChallenge(data) {
        return Repository.post(resource(''), data, new RequestHeaderBuilder().withAuth());
    },
    async editChallenge(id, data) {
        return Repository.put(resource(id), data, new RequestHeaderBuilder().withAuth());
    },
    async deleteChallenge(id) {
        return Repository.delete(resource(id), new RequestHeaderBuilder().withAuth());
    },
    async startChallenge(id) {
        return Repository.post(resource(`${id}/start`),null, new RequestHeaderBuilder().withAuth());
    },
    async finishChallenge(id) {
        return Repository.post(resource(`${id}/finish`),null, new RequestHeaderBuilder().withAuth());
    },
    async fetchDataToManageChallenge() {
        return Repository.get(resource('create'), new RequestHeaderBuilder().withAuth());
    },
    async fetchChallenge(id) {
        return Repository.get(resource(id), new RequestHeaderBuilder().withAuth());
    },
    async listChallenges(page = 1, status = null) {
        return Repository.get(resource(`?page=${page}${status ? `&status=${status}`: '' }`), new RequestHeaderBuilder().withAuth());
    },
    async addMembersToChallange(id, members) {
        return Repository.post(resource(`${id}/members`), members, new RequestHeaderBuilder().withAuth());
    },
    async sendReview(challengeId, review) {
        return Repository.post(resource(`${challengeId}/review`), review, new RequestHeaderBuilder().withAuth());
    },
    async listSummaryReview(id) {
        return Repository.get(resource(`${id}/summary`), new RequestHeaderBuilder().withAuth());
    },
    async listReviews(challengeId,memberId) {
        return Repository.get(resource(`${challengeId}/reviews/${memberId}`), new RequestHeaderBuilder().withAuth());
    }
}