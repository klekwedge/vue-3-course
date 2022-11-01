const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type your note',
      },
      notes: ['task1', 'task2', 'task3'],
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
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = '';
    },
    remove(index) {
      this.notes.splice(index, 1);
    },
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        console.log(localNotes);
        this.notes = JSON.parse(localNotes);
      }
    },
  },
};

Vue.createApp(App).mount('#app');
