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
import { ref, reactive } from 'vue';
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
  setup() {
    let error = ref<boolean | string>(false);
    const person = reactive({
      id: 123,
      title: '123',
      male: false,
    }) as IPerson;

    console.log(person);

    const setPersonTitle = (title: string) => {
      person.title = title;
    };

    setPersonTitle('John');
    console.log(person);

    error.value = true;
    console.log(error);

    error.value = 'value';
    console.log(error);
  },
};
</script>
