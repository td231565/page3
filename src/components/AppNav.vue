<template>
  <div class="nav">
    <div class="header" ref="header" :class="{ scrollDown: isScrollDown, viewHome: viewHome }"></div>

    <div class="nav nav--top" :class="{ sticky: isScrollDown }" ref="nav" @click="resizeHeaderHeight">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/links">Links</router-link> |
    </div>
  </div>
</template>

<script>
export default {
  name: "navTop",
  data () {
    return {
      isScrollDown: false,
      viewHome: true
    }
  },
  methods: {
    resizeNavbarScrolling () {
      let header = this.$refs.header
      this.isScrollDown = (window.scrollY >= header.offsetHeight) ? true : false
    },
    backgroundMoving () {
      let nav = this.$refs.nav
      nav.style.backgroundPosition = `0 ${45+(window.scrollY/50)}%`
    },
    resizeHeaderHeight () {
      let currentRoute = this.$router.currentRoute
      console.log(currentRoute)
      if (currentRoute.name === 'home') {
        this.viewHome = true
      } else {
        this.viewHome = false
      }
    }
  },
  mounted () {
    let vm = this
    window.addEventListener('scroll', vm.resizeNavbarScrolling, false)
    window.addEventListener('scroll', vm.backgroundMoving, false)
  }
}
</script>

<style lang="sass">
.header
  width: 100%
  height: 300px
  background-image: url(../assets/photo_night.jpg)
  background-position: center
  background-size: 100%
  transition: height ease 0.3s
  &.scrollDown
    height: 150px
    margin: 200px
  &.viewHome
    height: 75vh

.nav
  width: 100%
  &--top
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
      background-image: url(../assets/photo_night.jpg)
      background-position: 0 50%
      background-size: 100% auto // 定了X軸，position 就只能動Y軸
</style>
