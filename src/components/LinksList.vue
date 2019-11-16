<template>
  <div class="links">
    <h2>Links</h2>
    
    <ul class="list">
      <li class="list__item" v-for="link in links" :key="link.id">
        <a :href="link.href" target="_blank" rel="noopener" class="scene">
          <div class="card">
            <div class="card__face card__face--front flex--center">
              <img class="card__face__img" :src="link.src" :alt="link.alt" />
              <div class="card__face__text flex--center">
                <h3 class="card__face__text__content">{{ link.name }}</h3>
              </div>
            </div>
            <div class="card__face card__face--back flex--center">
              <img class="card__face__img" :src="link.src" :alt="link.alt" />
              <div class="card__face__text flex--center">
                <p class="card__face__text__content" v-html="link.description"></p>
              </div>
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
  name: 'linksList',
  data () {
    return {
      links: [
        {
          id: 1,
          name: 'PM 2.5 空氣品質觀測',
          href: 'https://td231565.github.io/page/pm25/pm25.html',
          alt: 'PM2.5 空氣品質觀測',
          src: imgPM25,
          description: '原生 JS<br />SCSS 樣式<br />AJAX 抓遠端資料'
        },
        {
          id: 2,
          name: 'Hexo Blog',
          href: 'https://td231565.github.io/tech',
          alt: 'Hexo 框架打造簡易部落格',
          src: imgHexo,
          description: 'hexo 框架<br />markdown 編輯文章'
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
    margin: 10px

.scene
  width: 100%
  height: 170px
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
      &__text
        width: 100%
        height: 100%
        padding: 10px
        position: absolute
        top: 0
        left: 0
        color: #000
        &__content
          padding: 10px
          text-align: left
          background-color: rgba(#fff, 0.9)
      &__img
        width: 100%
        max-width: 15rem
        max-height: 10rem
        padding: 10px
        display: block
      &--front
        .card__face__text
          padding: 0
      &--back
        // height: auto
        transform: rotateY(180deg)
        .card__face__text
          background-color: rgba(#000, 0.5)
</style>