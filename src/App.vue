<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
// font-family: 'Great Vibes', cursive;
// font-family: 'Sacramento', cursive;
// font-family: 'Poiret One', cursive;
// font-family: 'Bangers', cursive;
  components: { NavBar },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
