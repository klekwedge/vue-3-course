<template>
  <p>Home</p>
</template>

<script lang="ts">
import { onMounted } from 'vue';
import DataService from '@/services/DataService';
import ResponseData from '@/types/ResponseData';
// defineComponent,
export default {
  setup() {
    onMounted(() => getPeople());

    const getPeople = () => {
      DataService.getAll()
        .then((res: ResponseData) => console.log(res.data))
        .catch((e: Error) => console.log(e));
    };
  },
};
</script>
