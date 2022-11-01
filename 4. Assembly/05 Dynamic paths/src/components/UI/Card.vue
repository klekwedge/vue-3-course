<template>
  <div class="card">
    <div class="card-img__wrapper" v-if="imgUrl">
      <img class="card-img" :src="imgUrl" :alt="title" />
    </div>
    <span class="card-name">{{ name }}</span>
    <span class="card-title">{{ title }}</span>
    <div class="card-body">
      <slot></slot>

      <router-link
        v-if="link"
        :to="link"
        class="link"
        style="display: block; margin-top: 16px;"
        >See more</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>
