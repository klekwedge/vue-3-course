<template>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Обычный пользователь' }}</p>
    </li>
  </ul>
  <p>{{ getUsersLength }}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>
