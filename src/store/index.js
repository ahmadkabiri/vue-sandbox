import { createStore } from "vuex";

const store = createStore({
  // state () {
  //     return {
  //         count : 654343534734
  //     }
  // }
  state: {
    count: 4,
    todos: [
      { id: 1, text: "todo 1", done: true },
      { id: 2, text: "todo 2", done: false },
    ],
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id == id);
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
  },
});

export default store;
