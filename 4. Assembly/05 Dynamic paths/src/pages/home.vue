<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
      >
        {{ item.descr }}
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items'

export default {
  components: {
    Card
  },
  data() {
    return {
      items: items
    }
  }
}
</script>
