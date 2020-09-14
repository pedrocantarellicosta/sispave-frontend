import { SET_CURRENT_USER } from '../types/mutation-types'
import { RepositoryFactory } from '../../repositories/repositoryFactory'
/* eslint-disable */

const AuthRepository = RepositoryFactory.get('auth');

const state = {
    currentUser: {},
};

const getters = {
    user: state => state.currentUser,
    isManager: state => state.currentUser.type == 'manager',
    isSchool: state => state.currentUser.type == 'school',
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

        
    },
    async logout({ commit }) {
        await AuthRepository.logout();
        localStorage.clear();

    },
    async fetchUser({ commit }) {
        const { data: user } = await AuthRepository.me();

        if(!user) throw new Error('Usuário inválido. Logue-se novamente'); 
        commit(SET_CURRENT_USER, user);

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