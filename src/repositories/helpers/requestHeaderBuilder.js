import { getAccessToken } from "../../services/TokenService";

class RequestHeadersBuilder {
    
    withAuth() {
        this.headers.authorization = getAccessToken();
        return this;
    }
}

export default RequestHeadersBuilder;