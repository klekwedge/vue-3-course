<template>
  <div class="wrapper">
    <HeaderComp />
    <div class="wrapper-content">
      <div class="container">
        <h1>Hello</h1>
      </div>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from '@/components/Header';
import FooterComp from '@/components/Footer';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      links: [
        {
          title: 'Home',
          alias: 'home',
          url: '/',
        },
        {
          title: 'About',
          alias: 'about',
          url: '/about',
        },
      ],
    };
  },
};
</script>

<style></style>
