const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type your note',
      },
      notes: [],
    };
  },
  methods: {
    onSubmit() {
      this.notes.push(this.input.value);
      this.input.value = '';
    },
  },
};

Vue.createApp(App).mount('#app');
