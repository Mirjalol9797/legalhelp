import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        news: [],
        service: [],
        questions:[],
        user:{},
        baseURL: 'http://188.225.79.96/api',
        mediaURL: 'http://188.225.79.96/',
        phone_number: "",
        token: "",
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
        setToken(state, token) {
            state.token = token;
        },
        setPhone_number(state, phone_number) {
            state.phone_number = phone_number;
        },
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
        async getCode({ commit }, data) {
            await this.$axios.post('user/code/send/', { phone_number: data })
                .then(res => {
                    console.log("Code: ", res.data.code)
                })
                .catch(err => console.log(err))
        },
        async sendCode({ commit }, data) {
            await this.$axios.post('user/code/check/', data)
                .then(res => {
                    commit('setToken', res.data.token)
                    commit('setPhone_number', res.data.phone_number)
                    console.log('SendCode', res)

                })
                .catch(err => console.log(err))
        },      
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
                    console.log('getLawyers', res.data)
                })
        }
    },
})

export default store