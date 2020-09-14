import { getAccessToken } from "../../services/TokenService";

class RequestHeadersBuilder {
    constructor() {
        this.headers = {
            'x-lang': localStorage.getItem('locale'),
        };
    }
    withAuth() {
        this.headers.authorization = getAccessToken();
        return this;
    }
}

export default RequestHeadersBuilder;