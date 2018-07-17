<template>
    <div class="betty_background">
        <v-container fluid grid-list-md>
            <v-layout fluid row wrap>
                <v-flex xs12 sm6 md12 offset-sm3 offset-md0 hidden-sm-and-down>
                  <swiper :options="swiperOption" :not-next-tick="notNextTick">
                    <swiper-slide><img src="/static/banners/car_banner1.jpg"></swiper-slide>
                    <swiper-slide><img src="/static/banners/car_banner2.jpg"></swiper-slide>
                  </swiper>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-spacer></v-spacer>
                <div class="bonus_title_container bonus_title">
                    Latest Bonuses
                </div>
                <v-spacer></v-spacer>
            </v-layout>
            <v-layout row>
                <v-spacer></v-spacer>
                <div class="bonus_new_b_container">
                    <v-layout row wrap>
                        <v-card v-for="offer in offers"
                                :key="offer.id"
                                primary class="bonus_card">
                            <v-card-media height="200px" :src="offer.imageUrl">
                                <div medium class="icon-info-bonus">
                                    <v-icon>info</v-icon>
                                </div>
                            </v-card-media>
                            <v-card-title>
                                <div>
                                    <span class="bonus_card_title">{{offer.title.slice(0, 40)}}</span>
                                    <br/>
                                    <span class="bonus_card_text">{{offer.description.slice(0, 50)}}</span>
                                </div>
                                <br/>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn class="betty_btn_light center">Claim</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-layout>
                </div>
                <div class="bonus_top_b_container" >
                    <v-card class="bonus_0_paddings">
                        <v-card-title class="bonus_0_paddings">
                            <div class="bonus_top_b_title center">
                                Top Bonuses
                            </div>
                            <v-container class="bonus_0_paddings">
                                <v-layout row class="text-xs-center" wrap>
                                    <v-flex xs12 class="mb-5"
                                            v-for="i in 3"
                                            :key="i">
                                        <img src="/static/bonus/casino-logo.jpg">
                                        <v-card-title class="text-xs-center">
                                            <span class="bonus_top_b_text">Free spins, cash match!</span>

                                        </v-card-title>
                                        <v-btn class="bonus_btn_play">Play</v-btn>
                                        <hr class="mt-4">
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-title>
                    </v-card>
                </div>
                <v-spacer></v-spacer>
            </v-layout>
        </v-container>
        <br>
        <br>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 5000,
          paginationHide: true,
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          paginationClickable: false,
          spaceBetween: 30,
          loop: true,
          effect: 'fade'
        }
      }
    },
    computed: {
      filterItems () {
        let filterItems = [
          {img: '/static/icons/icon_all.svg', title: 'All', link: ''},
          {img: '/static/icons/icon_dice.svg', title: 'Casino', link: '#casino'},
          {img: '/static/icons/icon_trophy.svg', title: 'Sports Book', link: '#sportsbook'},
          {img: '/static/icons/icon_chip.svg', title: 'Poker', link: '#poker'},
          {img: '/static/icons/icon_target.svg', title: 'E-Sports', link: '#esports'},
          {img: '/static/icons/icon_coins.svg', title: 'No Deposit', link: '#nodeposit'},
          {img: '/static/icons/icon_bitcoin.svg', title: 'Bitcoin', link: '#bitcoin'}
        ]
        return filterItems
      },
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      offers () {
        return this.$store.getters.loadedOffers
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "../stylus/variables.styl"
    @import "../stylus/main.styl"
    .bonus_title
        font-size $betty-page-title
        color $betty-active
        font-weight bold
        padding 12px

    .bonus_card_title
        font-size $betty-title
        color $betty-dark
        font-weight bold

    .bonus_card_text
        font-size $betty-text
        color $betty-dark
        text-align justify
        text-justify inter-word

    .bonus_top_b_container
        display inline-block
        width 314px
        height auto
        padding 12px

    .bonus_top_b_title
        font-size $betty-page-title
        color $betty-dark
        font-weight bold

    .bonus_top_b_text
        font-size $betty-text-rb
        color $betty-dark
        padding-left 30px
        padding-rigth 30px
        text-align justify
        text-justify inter-word

    .bonus_0_paddings
        padding-left 0px !important
        padding-right  0px !important

    .bonus_btn_play
        font-size $betty-text
        color $betty-active !important
        background-color $betty-dark !important

    @media only screen and (min-device-width: 1256px)
        .bonus_far_filter_item
            padding-left 32px
            padding-right 32px

        .bonus_new_b_container
            display inline-block
            width 942px
            height auto

        .bonus_title_container
            width: 1256px

    @media only screen and (min-device-width: 942px) and (max-device-width: 1256px)
        .bonus_far_filter_item
            padding-left 20px
            padding-right 20px

        .bonus_new_b_container
            display inline-block
            width 628px
            height auto

        .bonus_title_container
            width 942px

    @media only screen and (min-device-width: 628px) and (max-device-width: 942px)
        .bonus_new_b_container
            display inline-block
            width 314px
            height auto

        .bonus_title_container
            width 628px

    @media only screen and (max-device-width: 628px)
        .bonus_new_b_container
            display inline-block
            width 314px
            height auto

        .bonus_top_b_container
            display none
            width 314px

        .bonus_title_container
            width: 314px

    .bonus_card
        background-color $betty-light-extra !important
        margin 12px
        width 290px
        height 400px
        .icon
            color $betty-active
            position absolute
            top -35%
            left 90%
            width w = 300px
            height h = 200px
            margin-left -(w / 2)
            z-index: 1
        background-color $betty-dark
        span.bonus-description
            font-size 0.8em
            line-height 1.5
            color $betty-dark
            text-align justify
            text-justify inter-word
        .card__actions
            padding 16px

    .bonus_bar_filter_slider
        color $betty-light !important

    .bonus_bar_filter
        color $betty-dark !important
        background-color $betty-light !important
        height 110px !important
</style>
