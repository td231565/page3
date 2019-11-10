<template>
  <div id="app">
    <div class="header" ref="header" :class="{ scrollDown: isScrollDown }"></div>

    <div class="nav nav--top" :class="{ sticky: isScrollDown }" ref="nav">
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
      let nav = this.$refs.nav
      nav.style.backgroundPosition = `0 ${45+(window.scrollY/50)}%`
    },
  },
  mounted () {
    let vm = this
    window.addEventListener('scroll', vm.resizeNavbarScrolling, false)
    window.addEventListener('scroll', vm.backgroundMoving, false)
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

.header
  width: 100%
  height: 300px
  background-image: url(./assets/photo_night.jpg)
  background-position: center
  background-size: 100%
  &.scrollDown
    height: 150px
    margin: 200px

.nav--top
  width: 100%
  height: 40px
  padding: 20px
  z-index: 9
  transition: ease 0.3s
  &.sticky
    height: 150px
    padding: 30px
    position: fixed
    top: 0
    left: 0
    background-image: url(./assets/photo_night.jpg)
    background-position: 0 50%
    background-size: 100% auto // 定了X軸，position 就只能動Y軸
  a
    font-weight: bold
    color: $text_default
    &.router-link-exact-active 
      color: $text_link
      background-color: $bg_default
</style>
