<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
        <!-- <img :src="item.img"> -->
        {{ item.descr }}
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/UI/Card'

export default {
  components: {
    Card
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Arhcer',
          descr: 'arhcer arhcer arhcer arhcer arhcer',
          img: require('@/assets/img/archer.png'),
          lvl: 4
        },
        {
          id: 2,
          title: 'Wizard',
          descr: 'wizard wizard wizard wizard wizard',
          img: require('@/assets/img/wizard.png'),
          lvl: 5
        }
      ]
    }
  }
}
</script>
