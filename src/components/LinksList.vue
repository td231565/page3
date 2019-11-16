<template>
  <ul class="list">
    <li class="list__item" v-for="link in links" :key="link.id">
      <a :href="link.href" target="_blank" rel="noopener" class="scene">
        <div class="card">
          <div class="card__face card__face--front">
            <img class="card__face__img" :src="link.src" :alt="link.alt" />
            <h3 class="card__face__text">{{ link.name }}</h3>
          </div>
          <div class="card__face card__face--back">
            <img class="card__face__img" :src="link.src" :alt="link.alt" />
            <div class="card__face__text flex--center">
              <h3>{{ link.name }}</h3>
              <p>{{ link.description }}</p>
            </div>
          </div>

          <!-- <div class="card__text card__text--front">
            
          </div>
          <div class="card__text card__text--back">
            
          </div> -->
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import imgPM25 from '../assets/pm25.png'
import imgHexo from '../assets/hexo.png'

export default {
  name: 'linksList',
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
  // height: 15rem
  mix-height: 0
  margin: 10px
  padding: 10px
  perspective: 60rem
  display: block
  color: #fff
  // border: 1px solid #808080
  // background-color: rgba($bg_dark, 0.5)
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
      background-color: $bg_dark
      &__text
        position: absolute
        top: 10px
        left: 50%
        transform: translateX(-50%)
        color: #000
      &__img
        width: 100%
        display: block
      &--front
      &--back
        height: auto
        transform: rotateY(180deg)
        .card__face__text
          width: 100%
          height: 100%
          background-color: rgba(#000, 0.5)
    // &__text
    //   position: absolute
    //   &--front
    //     top: 50%
    //     left: 50%
    //     transform: translate(-50%,-50%)
    //     &__header
    //       position: absolute
    //       top: 10px
    //       left: 50%
    //       transform: translate(-50%,0)
    //     &__img
    //       width: 100%
    //   &--back
    //     top: 0
    //     left: 50%
    //     transform: rotateY(180deg) translateX(50%)

</style>