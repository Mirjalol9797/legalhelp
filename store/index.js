import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
        news: [],
        service: [],
        questions:[],
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
        setService(state, payload) {
            state.service = payload;
        },
        setQuestions(state,payload){
            state.questions=payload;
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
        async getService({ commit }) {
            await this.$axios.get('')
                .then(res => {
                    commit('setService', res.data.results);
                })
        },
        async sendQuestion({commit}){
            await this.$axios.post('/v1/question/'+{customer_id})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }

    },
})

export default store