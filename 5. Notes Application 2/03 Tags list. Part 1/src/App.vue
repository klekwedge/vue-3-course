<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderComp'
import Footer from '@/components/FooterComp'
export default {
  components: {
    Header,
    Footer
  }
}
</script>