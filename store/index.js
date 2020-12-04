import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        news: [],
        service: [],
        questions:[],
        user:{},
        baseURL: 'https://legalhelp.uz/api',
        mediaURL: 'https://legalhelp.uz/',
        lawyers: []
    },
    getters: { 
        news(state) {
            return state.news;
        },
        service(state) {
            return state.service;
        },
        questions(state) {
            return state.questions;
        },
        lawyers(state) {
            return state.lawyers;
        }
    },
    mutations: {
        sendCode(state, payload) {
            state.code = payload
        },
        setNews(state, payload) {
            state.news = payload;
        },
        setQuestions(state,payload){
            state.questions=payload;
        },
        setLawyers(state, lawyer) {
            state.lawyers = lawyer
        }
        
    },
    actions: {     
        async getNews({ commit }) {
            await this.$axios.get('posts/')
                .then(res => {
                    commit('setNews', res.data.results);
                })
                .catch(err => {
                    console.log(err); 
                })
        },
        async getQuestions({commit},payload){
            await this.$axios.get(`services/?limit=10&offset=${payload*10}`)
            .then(res=>{
                commit('setQuestions',res.data.results);
            })
            .catch(err=> {
                console.log(err);
            })
        },
        async getLawyers({commit}) {
            await this.$axios.get('lawyer/list-search/')
                .then((res) => {
                    commit('setLawyers', res.data);
                    // console.log('getLawyers', res.data)
                })
        }
    },
})

export default store