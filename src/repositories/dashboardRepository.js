import { Repository } from './repository'
import RequestHeaderBuilder from './helpers/requestHeaderBuilder'

const resource = (path = '') => `/dashboard/${path}`;

export default {
    async show() {
        return Repository.get(resource(''), new RequestHeaderBuilder().withAuth());
    }
}