<template>
  <div class="card">
    <!-- <div class="card-header">
      <slot name="header"></slot>
    </div> -->
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <slot></slot>
    <!-- <div class="card-body">
      <slot name="body"></slot>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    name: {
      String,
      required: true
    },
    title: {
      String,
      required: true
    }
  }
}
</script>
