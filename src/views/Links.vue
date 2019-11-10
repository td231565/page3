<template>
  <div class="links">
    <LinksList />
  </div>
</template>

<script>
import LinksList from '../components/LinksList'

export default {
  name: 'links',
  components: {
    LinksList
  }
}
</script>

<style lang="sass" scoped>
.links
  height: 1000px
  padding: 3rem
  border: 1px solid red
</style>