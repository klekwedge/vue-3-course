<template>
  <p>Home</p>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import DataService from '@/services/DataService';
import ResponseData from '@/types/ResponseData';
import Peoples from '@/types/Peoples';

// defineComponent,
export default {
  setup() {
    const loading = ref(true as boolean);
    const peoples = ref({} as Peoples);

    onMounted(() => getPeople());

    const getPeople = () => {
      DataService.getAll()
        .then((res: ResponseData) => {
          peoples.value = res.data;
          loading.value = false;
        })
        .catch((e: Error) => console.log(e));
    };

    console.log(peoples);
  },
};
</script>
