<template>
  <p>{{ getUsersLength }}</p>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
  },
};
</script>
