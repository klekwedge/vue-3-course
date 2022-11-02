import { createStore } from 'vuex';

export const store = createStore({
  state: {
    users: [
      {
        id: 1,
        name: 'Alex',
        admin: true,
      },
      {
        id: 2,
        name: 'John',
        admin: false,
      },
      {
        id: 3,
        name: 'Ben',
        admin: false,
      },
    ],
  },
  getters: {
    getAllUsers(state) {
      return state.users;
    },
    getUsers(state) {
      return state.users.filter((user) => !user.admin);
    },
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id);
    },
    getUsersLength(state, getters) {
      const suffix = 'Кол-во пользователей:';
      return `${suffix} ${getters.getAllUsers.length}`;
    },
  },
});
