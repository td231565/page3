<template>
  <div id="home" ref="home">
    <navTop @jumpToHash="jumpToHash"/>

    <Hello />

    <div class="sections">
      <div id="about" class="sections__item" ref="about">
        <Intro />
      </div>
      <div id="skills" class="sections__item" ref="skills">
        <Skills />
      </div>
      <div id="links" class="sections__item" ref="links">
        <Links />
      </div>
    </div>

  </div>
</template>

<script>
import navTop from './components/AppNav'
import Intro from './components/AboutIntro'
import Skills from './components/AboutSkills'
import Links from './components/LinksList'
import Hello from './components/Hello'

export default {
  name: 'home',
  components: {
    navTop,
    Intro,
    Skills,
    Links,
    Hello
  },
  data () {
    return {
      stateObj: { home: '' },
    }
  },
  methods: {
    scrollToSection (hash) {
      let top = (hash !== '') ? this.$refs[hash].offsetTop-180 : 0
      console.log(top)
      window.scrollTo(0, top)
    },
    jumpToHash (hash) {
      // change url
      history.pushState(this.stateObj, 'page 1', `#${hash}`)
      // scroll to target
      this.scrollToSection(hash)
    },
    changeUrlHashOnScroll () {
      let nowOffset = window.pageYOffset
      let sections = document.querySelectorAll('.sections__item')
      sections.forEach(section => {
        console.log(section.offsetTop)
        console.log(nowOffset)
        console.log(section.offsetTop+section.offsetHeight)
        if (section.offsetTop-200 < nowOffset && (section.offsetTop+section.offsetHeight-200) > nowOffset) {
          window.location.hash = section.id
        } else if (nowOffset < 600) {
          window.location.hash = 'home'
        }
      })
    }
  },
  mounted () {
    console.log(this.$refs)
    let hash = window.location.hash
    hash = (hash === '') ? 'home' : hash.replace(/#/, '')
    console.log(hash)
    this.scrollToSection(hash)

    // window.addEventListener('scroll', this.changeUrlHashOnScroll, false)
  }
}
</script>

<style lang="sass">

#home
  width: 100%
  overflow: hidden
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text_default

.app__hello
  margin: 50px 0 150px 0

.sections
  width: 80%
  margin: auto
  // margin-top: 100px
  &__item
    height: calc(100vh - 150px)
    margin: 7rem 0
</style>
