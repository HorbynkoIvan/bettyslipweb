<template>
  <v-layout class="white">
    <v-flex xs12 sm8 md12 lg7  offset-lg1 offset-md0 >
      <v-container fluid grid-list-md class="white lighten-4">
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card>
                            <v-card-media src="/static/banners/topnews.jpg" height="200px">
                                <v-container fill-height fluid>
                                    <v-layout fill-height row wrap>
                                        <v-flex xs12 center flexbox>
                                            <div>
                                                <div class="news_block_title">
                                                    The latest from Betty Slip
                                                </div>
                                                <div class="news_block_text">all the news that matters...to us.
                                                </div>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-media>
                        </v-card>
                    </v-flex>
                    <v-flex xs12>
                        <div class="news_title">Latest News</div>
                    </v-flex>
                    <v-flex xs12 lg6 md12 sm12 v-for="post in posts" :key="post.id">
                        <v-card class="white" flat style="cursor: pointer;">
                            <v-container fluid grid-list-lg>
                                <v-layout row>
                                    <v-flex xs5 sm5 lg5 md4>
                                        <v-card-media
                                                :src="post.imageUrl"
                                                height="150px"
                                                @click="onLoadMeetup(post.id)"
                                                contain
                                        ></v-card-media>
                                    </v-flex>
                                    <v-flex xs7 lg7 sm7 md8 class="news_card_meta_content">
                                            <div class="news_card_title">
                                                <router-link v-bind:to="{ path: '/articles/' + post.id}">
                                                    {{post.title}}
                                                </router-link>
                                            </div>
                                            <div>{{post.content | truncate }}</div>
                                            <p class="news_card_meta_info">{{ post.date | date }}</p>
                                    </v-flex>

                                </v-layout>
                              <!--  <v-layout row>
                                     <v-flex xs12 align-end flexbox>
                                        <span class="news_card_meta_info">{{ post.date | date }}</span>
                                    </v-flex>
                                </v-layout>-->
                            </v-container>
                        </v-card>
                        <v-divider></v-divider>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>

        <v-flex sm4 md5 lg3 pa-2 class="hidden-xs-only" >
            <v-card class="white" flat>
                <v-card-title class="headline mb-0">
                    Trending
                </v-card-title>
            </v-card>

            <v-card class="white" v-for="trend in trends" :key="trend.id" flat>
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs5>
                            <v-card-media
                                    :src="trend.imageUrl"
                                    height="100px"
                                    contain
                            ></v-card-media>
                        </v-flex>
                        <v-flex xs7>
                            <div>
                                <div class="news_trends_title">{{ trend.title }}</div>
                                <div class="news_trends_text">{{trend.content | truncate }}</div>
                                <span class="news_trends_meta_info">{{ trend.date | date }}</span>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-divider></v-divider>
            </v-card>
            <v-card class="white" flat>
                <v-container fluid grid-list-lg>
                    <v-layout row>
                        <v-flex xs12>
                            <v-card-media src="/static/banners/banner_news.jpg" height="600px">
                            </v-card-media>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    computed: {
      filterItems () {
        let filterItems = [
          {img: '/static/icons/icon_dice.svg', title: 'Casino', link: '#casino'},
          {img: '/static/icons/icon_trophy.svg', title: 'Sports Book', link: '#sportsbook'},
          {img: '/static/icons/icon_chip.svg', title: 'Poker', link: '#poker'},
          {img: '/static/icons/icon_target.svg', title: 'E-Sports', link: '#esports'},
          {img: '/static/icons/icon_coins.svg', title: 'No Deposit', link: '#nodeposit'},
          {img: '/static/icons/icon_coin.svg', title: 'Bitcoin', link: '#bitcoin'}
        ]
        return filterItems
      },

      meetups () {
        return this.$store.getters.featuredMeetups
      },
      offers () {
        return this.$store.getters.loadedOffers
      },
      trends () {
        return this.$store.getters.loadedTrends
      },
      posts () {
        return this.$store.getters.loadedPosts
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/articles/' + id)
      }
    },
    filters: {
      chop: function (string, value) {
        return string.slice(0, value) + '...'
      }
    }
  }
</script>

<style scoped>
  a:link {
      color: #121212;
  }

  /* visited link */
  a:visited {
      color: #121212;
  }

  /* mouse over link */
  a:hover {
      color: #121212;
  }

  /* selected link */
  a:active {
      color: #121212;
  }
  .news_card_meta_content{
      position: relative;
  }
  .news_card_meta_info{
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0 0 0 8px;
  }
  .news_card_title a{
      text-decoration: none;
  }
</style>

<style lang="stylus" scoped>

    @import "../stylus/variables.styl"



    .news_block_title
        color $betty-active
        font-size $betty-big-title
        font-weight bold

    .news_block_text
        color $betty-active
        font-size $betty-text

    .news_title
        color $betty-dark
        font-size $betty-title
        font-weight bold

    .news_card_title
        color $betty-dark
        font-size $betty-title
        font-weight bold

    .news_card_text
        color $betty-dark
        font-size $betty-text

    .news_card_meta_info
        color gray
        font-size $betty-meta-info

    .news_trends_title
        color $betty-dark
        size $betty-title-rb
        font-weight bold

    .news_trends_text
        color $betty-dark
        size $betty-text-rb

    .news_trends_meta_info
        color gray
        font-size $betty-meta-info-rb
</style>
