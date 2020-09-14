import auth from './authRepository';
import schools from './schoolRepository';
import violences from './violenceRepository';
import reports from './reportRepository';
import infractions from './infractionsRepository';
import dashboard from './dashboardRepository';

const repositories = {
    auth,
    schools,
    violences,
    infractions,
    reports,
    dashboard
};

export const RepositoryFactory = {
    get: name => repositories[name],
}