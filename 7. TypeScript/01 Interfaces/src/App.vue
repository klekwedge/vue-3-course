<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        {{ getName }}
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/HeaderComp.vue';
import Footer from '@/components/FooterComp.vue';

interface IPerson {
  id: number;
  title: string;
  male: boolean;
}

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      wizzard: {
        id: 1183,
        title: 'Wizzard',
        male: true,
      } as IPerson,
    };
  },
  computed: {
    getName(): string {
      return this.wizzard.title;
    },
  },
  methods: {
    setName(title: string) {
      this.wizzard.title = title;
    },
  },
};
</script>
