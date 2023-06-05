import { createStore } from "vuex";
import axios from "axios";

export default createStore({
	state: {
		posts: [],
		index: 0,
	},
	getters: {
		getPosts(state) {
			return state.posts;
		},
	},
	actions: {
		FETCH_MORE_POST({ state, commit }) {
			axios
				.get(
					`https://codingapple1.github.io/vue/more${state.index}.json`,
				)
				.then(result => {
					commit("SET_MORE_POST", result.data);
				})
				.catch(err => {
					console.log(err);
				});
		},
	},
	mutations: {
		SET_POSTS(state, data) {
			state.posts = data;
		},
		SET_MORE_POST(state, data) {
			state.posts.push(data);
			state.index++;
		},
		TOGGLE_LIKES(state, index) {
			const post = state.posts[index];
			const { likes, liked } = post;
			post.likes = liked ? likes - 1 : likes + 1;
			post.liked = !liked;
		},
	},
});
