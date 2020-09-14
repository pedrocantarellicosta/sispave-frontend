export default class ParseErrorService {

    static toArray(err) {
        return this.iterateErrorObject(err);
    }

    static renderErrorMessage(err) {
        return JSON.parse(err.request.response).error;
    }

    static iterateErrorObject(errorObject) {
        const data =  errorObject.response.data.error.fields;
        const errorMessages = [];

        for (let i in data) {
            errorMessages.push(data[i]);
        }

        return errorMessages;
    }

}