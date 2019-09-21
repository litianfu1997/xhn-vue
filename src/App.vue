<template>
  <div id="app">
      <navMenu></navMenu>
      <RouterView></RouterView>
  </div>
</template>

<script>
import navMenu from './components/navMenu'

export default {
  name: 'app',
  components:{
    navMenu: navMenu,
  }

}
</script>

<style>

</style>
