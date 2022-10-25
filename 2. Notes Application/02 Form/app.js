const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type your note',
      },
    };
  },
  methods:{
    onSubmit(){
      console.log(this.input.value);
    }
  }
};

Vue.createApp(App).mount('#app');
