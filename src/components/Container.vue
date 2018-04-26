<template>
  <div class="app">
    <Header/>
    <b-container>
      <router-view></router-view>
    </b-container>
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
