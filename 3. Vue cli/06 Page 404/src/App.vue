<template>
  <div class="wrapper">
    <HeaderComp />

    <div class="wrapper-content">
      <div class="container">
        <router-view />
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
};
</script>

<style></style>
