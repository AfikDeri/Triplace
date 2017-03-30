import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		user: null,
		showMenu: false,
		query: "",
		posts: [],
		countries: [
			{name:"argentina", upper: "Argentina"},
			{name:"belize", upper: "Belize"},
			{name: "bolivia", upper: "Bolivia"},
			{name:"brazil", upper:"Brazil"},
			{name:"chile", upper:"Chile"},
			{name:"colombia", upper:"Colombia"},
			{name:"mexico", upper:"Mexico"},
			{name:"ecuador", upper:"Ecuador"},
			{name:"peru", upper:"Peru"},
		]
	},
	mutations: {
        setUser(state, payload){
            state.user = payload;
        },
        setPosts(state, payload){
            state.posts = payload;
        },
				toggleNav(state, payload){
						state.showMenu = payload;
				},
        logout(state){
            state.user = null;
        }

    },
		actions: {
			searchTyped(context, query){
				context.state.query = query;
			}
    }
});
