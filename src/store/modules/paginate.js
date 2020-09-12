import { 
    GO_TO_NEXT_PAGE, 
    GO_TO_PREVIOUS_PAGE, 
    GO_TO_PAGE, SET_PAGES 
} from '../types/mutation-types'

const state = {
    current_page: 1,
    total: 1,
    last_page: 1,
    per_page: 1,
};

const getters = {
    currentPage: state => state.current_page,
    totalPages: state => state.last_page,
};
const mutations = {
    [GO_TO_NEXT_PAGE] (state) {
        state.current_page++
    },
    [GO_TO_PREVIOUS_PAGE] (state) {
        state.current_page--
    },
    [GO_TO_PAGE] (state, page) {
        state.current_page = page;
    },
    [SET_PAGES] (state, { current_page, total, last_page, per_page }) {
        state.last_page = last_page;
        state.current_page = current_page;
        state.total = total;
        state.per_page = per_page;
    }
};
const actions = {
    goToNextPage({ commit }) {
       commit(GO_TO_NEXT_PAGE);
    },
    goToPreviousPage({ commit }) {
        commit(GO_TO_PREVIOUS_PAGE);
    },
    goToPage({ commit }, page) {
        commit(GO_TO_PAGE, page);
    },
    setPages({ commit }, paginate) {
        commit(SET_PAGES, paginate);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}