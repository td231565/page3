<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="about__sections">
      <Intro />
      <Skills />
    </div>
  </div>
</template>

<script>
import Intro from '../components/AboutIntro'
import Skills from '../components/AboutSkills'

export default {
  name: 'About',
  components: {
    Intro,
    Skills
  }
}
</script>

<style lang="sass" scoped>
.about__sections
  width: 80%
  margin: auto
</style>