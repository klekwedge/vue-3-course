<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/HeaderComp.vue';
import Footer from '@/components/FooterComp.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
