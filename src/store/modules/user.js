import { SET_CURRENT_USER } from '../types/mutation-types'
import { RepositoryFactory } from '../../repositories/repositoryFactory'
/* eslint-disable */

const AuthRepository = RepositoryFactory.get('auth');

const state = {
    currentUser: "",
};

const getters = {
    user: state => state.currentUser,
    isManager: state => state.currentUser == 'manager',
    isSchool: state => state.currentUser == 'school',
};
const mutations = {
    [SET_CURRENT_USER](state, user) {
        state.currentUser = user;
    }
};
const actions = {
    async logUser({ commit }, { email, password }) {
        const { data } = await AuthRepository.login({ email, password });

        if(!data) throw new Error('Credenciais inválidas');

        localStorage.setItem('token', data.access_token);
        commit(SET_CURRENT_USER, data.type);

        
    },
    async logout({ commit }) {
        await AuthRepository.logout();
        localStorage.clear();

    },
    async registerUser({ commit }, user) {
        const { data } = await AuthRepository.register(user);

        localStorage.setItem('token', data.data.access_token);
    },
    async fetchUser({ commit }) {
        const { data: user } = await AuthRepository.me();
        if(!user) throw new Error('Usuário inválido. Logue-se novamente'); 
        return;
    }
};
/* eslint-enable */

export default {
    state,
    getters,
    actions,
    mutations
}