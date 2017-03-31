import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state: {
		user: null,
		showMenu: false,
		query: "",
		location: {},
		flight:null,
		hotel:null,
		posts: [],
        selectedCountry: null,
        categories: [],
        countries: [
			{name:"argentina", upper: "Argentina", id:"9562"},
    		{name:"belize", upper: "Belize", id:"27206"},
    		{name: "bolivia", upper: "Bolivia", id:"36072"},
    		{name:"brazil", upper:"Brazil", id:"2310390"},
    		{name:"chile", upper:"Chile", id:"60151"},
    		{name:"colombia", upper:"Colombia", id:"108205"},
    		{name:"mexico", upper:"Mexico", id:"236698"},
    		{name:"ecuador", upper:"Ecuador", id:"124692"},
    		{name:"peru", upper:"Peru", id:"258245"}
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
        },
        setCountry(state, payload){
            state.selectedCountry = payload;
        },
		setFlight(state,payload){
			state.flight = payload;
		},
		setHotel(state,payload){
			state.hotel = payload;
		},
        setCategories(state, payload){
            state.categories = payload;
        },
        setLocation(state, payload){
            state.location = payload;
        }

    },
		actions: {
			searchTyped(context, query){
				context.state.query = query;
			}
    }
});
