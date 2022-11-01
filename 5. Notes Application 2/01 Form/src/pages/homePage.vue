<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit" />
  </div>
</template>

<script>
import Form from '@/components/Notes/FormComp';

export default {
  components: {
    Form,
  },
  methods: {
    handleSubmit(note) {
      console.log(note);
    },
  },
  data() {
    return {};
  },
};
</script>
