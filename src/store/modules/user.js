import { SET_CURRENT_USER } from '../types/mutation-types'
import { RepositoryFactory } from '../../repositories/repositoryFactory'

const AuthRepository = RepositoryFactory.get('auth');

const state = {
    currentUser: {},
};

const getters = {
    user: state => state.currentUser,
    isManager: state => state.currentUser && state.currentUser.types && (state.currentUser.types.includes('manager') || state.currentUser.types.includes('admin')),
    isAdmin: state => state.currentUser && state.currentUser.types && state.currentUser.types.includes('admin'),
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

        localStorage.setItem('token', data.data.access_token);

        
        commit(SET_CURRENT_USER, data.data.user);
    },
    async logout({ commit }) {
        await AuthRepository.logout();
        localStorage.clear();

        commit(SET_CURRENT_USER, {});
    },
    async registerUser({ commit }, user) {
        const { data } = await AuthRepository.register(user);

        localStorage.setItem('token', data.data.access_token);
    },
    async fetchUser({ commit }) {
        const { data: user } = await AuthRepository.me();
        if(!user) throw new Error('Usuário inválido. Logue-se novamente'); 
        return commit(SET_CURRENT_USER, user);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}