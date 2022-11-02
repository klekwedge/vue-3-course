<template>
  <h1>Только обычные пользователи</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Обычный пользователь' }}</p>
    </li>
  </ul>
  <p>{{ getUsersLength }}</p>
  <input v-model="userId" type="number" />
  <p>{{ getUser || 'User not found' }}</p>
</template>

<script>
export default {
  data() {
    return {
      userId: 3,
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUserById(this.userId);
    },
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>
