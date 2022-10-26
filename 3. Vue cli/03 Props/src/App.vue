<template>
  <div class="wrapper">
    <HeaderComp :title="title" :links="links" />

    <div class="wrapper-content">
      <div class="container">
        <h1>Hello</h1>
      </div>
    </div>

    <FooterComp :title="title" :links="links" />
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
      title: 'Template',
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
