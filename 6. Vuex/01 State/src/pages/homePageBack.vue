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
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        console.log(localNotes);
        this.notes = JSON.parse(localNotes);
      }
    },
    handleSubmit(title) {
      const note = { title: title, tags: [] };
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>
