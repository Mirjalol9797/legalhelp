import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        // data 
        news: [],
    },
    mutations: {
        setNews(state,payload) {
            state.news = payload;
        }
    },
    getters: {
        news(state) {
            return state.news;
        }
    },
    actions: {
        async getNews({ commit }) {
            await this.$axios.get('posts/')
                .then(res => {
                    commit('setNews',res.data.results);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        
    },
})

export default store