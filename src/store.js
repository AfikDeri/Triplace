import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		user: null,
		posts: [],
        countries: [
            {name: "Brazil", image: "https://www.w3schools.com/w3images/girl_train.jpg"},
            {name: "Mexico", image: "https://www.w3schools.com/w3images/girl.jpg"},
            {name: "Israel", image: "https://www.w3schools.com/w3images/natureboy.jpg"}
        ]
	},
	mutations: {
        setUser(state, payload){
            state.user = payload;
        },
        setPosts(state, payload){
            state.posts = payload;
        },
        logout(state){
            state.user = null;
        }

    },
	actions: {

    }
});