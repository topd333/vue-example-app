<template>
  <div class="app">
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './widgets/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
