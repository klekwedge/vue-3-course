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
        admin: true,
      },
      {
        id: 3,
        name: 'Ben',
        admin: false,
      },
    ],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUsersLength(state, getters) {
      const suffix = 'Кол-во пользователей:';
      return `${suffix} ${getters.getUsers.length}`;
    },
  },
});
