import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        // data 
        temp: [],
    },
    mutations: {
        setTemp(state, payload) {
            state.temp = payload;
        }
    },
    getters: {
        temp(state) {
            return state.temp;
        }
    },
    actions: {
        async dummyFunc({ commit }) {
            await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    commit('setTemp', res.data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
})

export default store