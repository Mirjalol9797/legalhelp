import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        news: [],
        service:[],
        baseURL: 'http://188.225.79.96/api'
    },
    mutations: {
        setNews(state,payload) {
            state.news = payload;
        },
        setService(state,payload){
            state.service = payload;
        },
    },
    getters: {
        news(state) {
            return state.news;
        },
        service(state){
            return state.service;
        }
    },
    actions: {
        async getNews({ commit }) {
            await this.$axios.get('posts/')
                .then(res => {
                    console.log(res.data.results);
                    commit('setNews',res.data.results);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        async getService({commit}){
            await this.$axios.get('')
            .then(res =>{
                console.log(res.data.results);
                commit('setService',res.data.results);
            })
        }
        
    },
})

export default store