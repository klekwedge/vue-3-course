<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/FormComp';
import List from '@/components/Notes/ListComp';

export default {
  components: {
    Form,
    List,
  },
  data() {
    return {
      notes: [
        {
          title: 'task1',
          tags: ['work'],
        },
        {
          title: 'task2',
          tags: ['work', 'home'],
        },
        {
          title: 'task3',
          tags: ['home'],
        },
        {
          title: 'task4',
          tags: [],
        },
      ],
    };
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>
