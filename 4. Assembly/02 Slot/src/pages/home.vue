<template>
  <div class="md-body">
    <div class="card__wrapper" v-for="item in items" :key="item.id">
      <Card :name="`${item.lvl} lvl`" :title="item.title">
        {{ item.descr }}
        <!-- <template v-slot:body>
          {{ item.descr }}
        </template>
        <template v-slot:header>
          <h1>{{ item.title }}</h1>
        </template> -->
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
          lvl: 4
        },
        {
          id: 2,
          title: 'Wizard',
          descr: 'wizard wizard wizard wizard wizard',
          lvl: 5
        }
      ]
    }
  }
}
</script>
