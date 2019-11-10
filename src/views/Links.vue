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
              <p>{{ link.description }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import imgPM25 from '../assets/pm25.png'
import imgHexo from '../assets/hexo.png'

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
          src: imgPM25,
          description: 'JS + SCSS'
        },
        {
          id: 2,
          name: 'hexo',
          href: 'https://td231565.github.io/tech',
          alt: 'Hexo 框架打造簡易部落格',
          src: imgHexo,
          description: 'hexo + markdown'
        },
      ]
    }
  },
  methods:{

  },
  created () {
  }
}
</script>

<style lang="sass" scoped>
.links
  height: 1000px
  padding: 3rem
  border: 1px solid red

.list
  width: 100%
  display: flex
  &__item
    width: 31%
    &__img
      max-width: 15rem
      max-height: 10rem

.scene
  width: 100%
  height: 15rem
  perspective: 60rem
  display: block
  color: #fff
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
      height: 100%
      width: 100%
      position: absolute
      backface-visibility: hidden
      &--front
        background-color: $bg_dark
      &--back
        background-color: $bg_dark
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