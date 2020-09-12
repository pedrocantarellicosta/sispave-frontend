import { 
    SET_LOADER,
} from '../types/mutation-types';

const state = {
    isLoading: false,
};

const getters = {
    appIsLoading: state => state.isLoading,
};
const mutations = {
    [SET_LOADER](state, condition) {
        state.isLoading = condition;
    }
};
const actions = {
    loadPage({ commit }, condition = true) {
        commit(SET_LOADER, condition);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}