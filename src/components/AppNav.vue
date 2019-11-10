<template>
  <div class="nav">
    <div class="header" ref="header" :class="{ scrollDown: isScrollDown }"></div>

    <div class="nav--top" :class="{ sticky: isScrollDown }" ref="nav">
      <ul class="nav--top__list">
        <li class="nav--top__list__item" @click="jumpToHash('app')">Home</li> |
        <li class="nav--top__list__item" @click="jumpToHash('intro')">About</li> |
        <li class="nav--top__list__item" @click="jumpToHash('skills')">Skills</li> |
        <li class="nav--top__list__item" @click="jumpToHash('links')">Links</li> |
      </ul>
    </div>

    <h1 class="hello">Front-End is really Interesting</h1>
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
    jumpToHash (hash) {
      this.$emit('jumpToHash', hash)
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
  height: 75vh
  background-image: url(../assets/photo_night.jpg)
  background-position: center
  background-size: 100% auto
  &.scrollDown
    margin-bottom: 100px

.nav
  width: 100%
  font-size: 1.2rem
  &--top
    width: 100%
    height: 40px
    z-index: 9
    transition: height ease 0.3s
    &__list
      height: 100%
      padding: 20px
      display: flex
      justify-content: center
      &__item
        padding: 0 1rem
        cursor: pointer
        &:hover
          transform: translateY(1.5px)
    &.sticky
      height: 150px
      position: fixed
      top: 0
      left: 0
      background-image: url(../assets/photo_night.jpg)
      background-position: 0 50%
      background-size: 100% auto // 定了X軸，position 就只能動Y軸
      .nav--top__list
        padding-top: 100px
        justify-content: flex-start
        background-color: rgba(#000, 0.2)
        &__item
          font-weight: 700
          color: #fff
</style>
