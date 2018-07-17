<template>
  <v-layout>
    <v-flex xs12 sm8 md12 lg7  offset-lg1 offset-md0>
      <v-container fluid grid-list-md class="white lighten-4">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-media
                src="/static/banners/top_vlogs.jpg"
                height="200px">
                <v-container fill-height fluid>
                  <v-layout fill-height row wrap>
                    <v-flex xs12 center flexbox>
                      <div>
                        <div class= "vlog_block_title">Video logs</div>
                        <div class="vlog_block_text">Featured videos with our streamers</div>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
          </v-flex>
          <v-flex xs12>
              <div class="vlog_title">Latest Vlogs</div>
          </v-flex>
          <v-flex xs12 v-for="video in videos" :key="video.id">
            <v-card class="white" flat>
              <v-container fluid grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs12 sm5 md5 lg5>
                    <v-card-media>
                      <youtube :video-id=video.videoID
                        @ready="ready"
                        @ended="ended"
                        @playing="paused"
                        @paused="paused"
                        @buffering="buffering"
                        @qued="qued"
                        player-width="100%"
                        player-height="50%"
                      ></youtube>
                    </v-card-media>
                  </v-flex>
                  <v-flex xs12 sm7 md7 lg7>
                    <div>
                      <div class= "vlog_video_title">{{video.title}}</div>
                      <div class= "vlog_video_text">{{video.description}}</div>
                      <div class= "vlog_video_meta_info">{{ video.date | date }}</div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <v-flex sm4 md5 lg3 pa-2 class="hidden-xs-only">
      <v-card class="white" flat>
        <v-card-title>
          <div>
            <h3 class="headline mb-0">Trending</h3>
          </div>
        </v-card-title>
      </v-card>

      <v-card class="white" v-for="trend in trends" :key="trend.id" flat >
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
                <div class= "vlog_trend_title"><b>{{ trend.title }}</b></div>
                <div class="vlog_trend_text">{{trend.content | truncate }}</div>
                <span class="vlog_trend_meta_info">{{ trend.date | date }}</span>
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
              <v-card-media src="/static/banners/banner_news.jpg" height = "600px" contain>
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
      sorts () {
        let sorts = [
          {option: 'date'},
          {option: 'length'},
          {option: 'today'},
          {option: 'this week'},
          {option: 'this month'}
        ]
        return sorts
      },
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      offers () {
        return this.$store.getters.loadedOffers
      },
      videos () {
        return this.$store.getters.loadedVideos
      },
      trends () {
        return this.$store.getters.loadedTrends
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
    .vlog_title
        color $betty-dark
        font-weight bold
        font-size $betty-title

    .vlog_block_title
        color $betty-active
        font-weight bold
        font-size $betty-big-title

    .vlog_block_text
        color $betty-active
        font-size $betty-text

    .vlog_video_title
        color $betty-dark
        font-weight bold
        font-size $betty-title


    .vlog_video_text
        color $betty-dark
        font-size $betty-text

    .vlog_video_meta_info
        color $betty-gray
        font-size $betty-meta-info

    .vlog_trend_title
        color $betty-dark
        font-weight bold
        font-size $betty-title-rb

    .vlog_trend_text
        color $betty-dark
        font-size $betty-text-rb

    .vlog_trend_meta_info
        color $betty-gray
        font-size $betty-meta-info-rb

</style>
