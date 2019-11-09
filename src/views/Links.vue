<template>
  <div class="links">
    <ul class="list">
      <li class="list__item" v-for="link in links" :key="link.id">
        <a :href="link.href" target="_blank" rel="noopener" class="scene">
          <div class="card">
            <div class="card__face card__face--front">FRONT</div>
            <div class="card__face card__face--back">BACK</div>

            <div class="card__text card__text--front">
              <h3>{{ link.name }}</h3>
              <img class="list__item__img" :src="link.src" :alt="link.alt" />
            </div>
            <div class="card__text card__text--back">
              <h3>{{ link.name }}</h3>
              <img class="list__item__img" :src="link.src" :alt="link.alt" />
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import imgPM25 from '../assets/pm25.png'

export default {
  name: 'links',
  data () {
    return {
      links: [
        {
          id: 1,
          name: 'pm25',
          href: 'https://td231565.github.io/page/pm25/pm25.html',
          alt: 'PM2.5 空氣品質觀測',
          src: imgPM25
        }
      ],
      ajaxdata: null
    }
  },
  methods:{
    getLinksData () {
      let vm = this
      vm.axios.get('../assets/links.json').then(res => {
        vm.ajaxdata = res.data
      })
    }
  },
  created () {
    this.getLinksData()
  }
}
</script>

<style lang="sass" scoped>
.links
  height: 1000px
  padding: 3rem
  border: 1px solid red

.list
  display: flex
  &__item
    &__img
      width: 15rem
      height: 10rem

.scene
  width: 20rem
  height: 15rem
  perspective: 60rem
  display: block
  border: 1px solid #808080
  .card
    width: 100%
    height: 100%
    position: relative
    transition: transform 1s
    transform-style: preserve-3d
    &:hover
      transform: rotateY(180deg)
    &__face
      position: absolute
      height: 100%
      width: 100%
      backface-visibility: hidden
      &--front
        background-color: red
      &--back
        background-color: blue
        transform: rotateY(180deg)
    &__text
      position: absolute
      &--front
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
      &--back
        top: 0
        left: 50%
        transform: rotateY(180deg) translateX(50%)

</style>