<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <a class="navbar-link" :href="link.url">{{ link.title }}</a>
          </li>
        </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
