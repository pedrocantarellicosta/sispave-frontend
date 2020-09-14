import auth from './authRepository';
import schools from './schoolRepository';
import violences from './violenceRepository';
import reports from './reportRepository';
import infractions from './InfractionsRepository';

const repositories = {
    auth,
    schools,
    violences,
    infractions,
    reports
};

export const RepositoryFactory = {
    get: name => repositories[name],
}