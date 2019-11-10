<template>
  <div id="app">
    <navTop />

    <router-view />
  </div>
</template>

<script>
import navTop from './components/AppNav'

export default {
  name: "app",
  components: {
    navTop
  }
}
</script>

<style lang="sass">
@import './sass/_variables'
@import './sass/_base'

#app
  width: 100%
  overflow: hidden
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text_default

a
  font-weight: bold
  color: $text_default
  &.router-link-exact-active 
    color: $text_link
    background-color: $bg_default
</style>
