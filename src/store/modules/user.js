import { SET_CURRENT_USER } from '../types/mutation-types'
import { RepositoryFactory } from '../../repositories/repositoryFactory'
/* eslint-disable */

const AuthRepository = RepositoryFactory.get('auth');

const state = {
    currentUser: {},
    currentType: ""
};

const getters = {
    user: state => state.currentUser,
    isManager: state => state.currentType == 'manager',
    isSchool: state => state.currentType == 'school',
};
const mutations = {
    [SET_CURRENT_USER](state, user) {
        state.currentUser = user;
    }
};
const actions = {
    async logUser({ commit }, { email, password }) {
        const { data } = await AuthRepository.login({ email, password });
        console.log(data);
        if(!data) throw new Error('Credenciais inválidas');

        localStorage.setItem('token', data.access_token);
        // commit(SET_CURRENT_USER, data.type);
        state.currentType = data.type;
        console.log("aqui");
        console.log(state.currentType);
        
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
        console.log(user);
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