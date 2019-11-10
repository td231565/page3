<template>
  <div id="app">
    <navTop @jumpToHash="jumpToHash"/>

    <h1 class="app__hello">Front-End is really Interesting</h1>

    <div class="sections">
      <div id="intro">
        <Intro />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="links">
        <LinksList />
      </div>
    </div>

  </div>
</template>

<script>
import navTop from './components/AppNav'
import Intro from './components/AboutIntro'
import Skills from './components/AboutSkills'
import LinksList from './components/LinksList'

export default {
  name: "app",
  components: {
    navTop,
    Intro,
    Skills,
    LinksList
  },
  methods: {
    jumpToHash (hash) {
      let top = document.getElementById(hash).offsetTop
      window.scrollTo(0, top-150)
    }
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

.app__hello
  margin: 50px 0 150px 0

.sections
  width: 80%
  margin: auto
</style>
