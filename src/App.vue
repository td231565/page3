<template>
  <div id="app">
    <div class="header" ref="header" :class="{ scrollDown: isScrollDown }"></div>

    <div id="nav" :class="{ sticky: isScrollDown }">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/links">Links</router-link> |
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      isScrollDown: false
    }
  },
  methods: {
    resizeNavbarScrolling () {
      let header = this.$refs.header
      this.isScrollDown = (window.scrollY >= header.offsetHeight) ? true : false
    },
    backgroundMoving() {
      console.log('m')
      // const about = document.querySelector('.about-container')
      // about.style.backgroundPositionX = (window.scrollY/100)*4 + '%'
    },
  },
  mounted () {
    let vm = this
    window.addEventListener('scroll', vm.resizeNavbarScrolling, false)
  }
}
</script>

<style lang="sass">
@import './sass/_variables'
@import './sass/_base'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text_default

.header
  width: 100%
  height: 300px
  background-image: url(./assets/photo_night.jpg)
  background-position: center
  background-size: cover
  &.scrollDown
    height: 150px
    margin: 200px

#nav
  width: 100%
  height: 100px
  padding: 30px
  &.sticky
    height: 150px
    position: fixed
    top: 0
    left: 0
    background-image: url(./assets/photo_night.jpg)
    background-position: center
    background-size: cover
  a
    font-weight: bold
    color: $text_default
    &.router-link-exact-active 
      color: $text_link
      background-color: $bg_default
</style>
