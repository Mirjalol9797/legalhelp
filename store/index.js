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
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setPhone_number(state, phone_number) {
            state.phone_number = phone_number;
        },
        setCode(state, payload) {
            state.code = payload
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
                    console.log('Second request', res)
                    commit('setToken', res.data.token)
                    commit('setPhone_number', res.data.phone_number)

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
                console.log(res)
                commit('setQuestions',res.data.results);
            })
            .catch(err=> {
                console.log(err);
            })
        },
    },
})

export default store