<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>gender</td>
          <td>mass</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(people, index) in peoples.results" :key="index">
          <td>{{ people.name }}</td>
          <td>{{ people.gender }}</td>
          <td>{{ people.mass }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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

    return {
      loading,
      peoples,
    };
  },
};
</script>
