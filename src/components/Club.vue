<template>
  <v-layout row wrap>
      <v-flex xs12 sm6 md12 offset-sm3 offset-md0>
        <v-container fluid grid-list-md class="white lighten-4">
          <v-layout ma-0 pa-0>
            <v-flex xs2 ma-0 pa-0>
              <v-card class="yellow">
                <img src ="/static/logo_text_website.png">
              </v-card>
            </v-flex>
            <v-flex xs10 ma-0 pa-0 center >
              <v-card class="orange">
                <v-layout >
                  <v-flex xs10 pt-4 ma-1>
                    <v-card class="red" xs12>
                      <div class="subheading text-xs-right">Welcome,</div>
                    </v-card>
                  </v-flex>
                  <v-flex xs2 pt-4 pr-3 ma-1>
                    <v-card class="pink text-xs-right" xs12>
                      <img src ="/static/icons/Facebook.svg" height="28px">
                      <img src ="/static/icons/Twitch.svg" height="28px">
                      <img src ="/static/icons/Youtube.svg" height="28px">
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card class="grey">
                      <v-tabs dark centered>
                        <v-tabs-bar class="topbar text-sm-right">
                          <v-tabs-slider class="grey lighten-3"></v-tabs-slider>
                            <v-spacer></v-spacer>
                            <v-tabs-item
                              v-for="item in menuItems"
                              :key="item.title"
                              :to="item.link"
                              >
                              <div class= "subheading tabtextcolor">{{ item.title }}</div>
                            </v-tabs-item>
                          </v-tabs-bar>
                        </v-tabs>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
    <v-divider></v-divider>
    <v-flex xs12 sm6 md7 offset-sm3 offset-md1>
      <v-container fluid grid-list-md class="white lighten-4">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="green">
              <v-card-media
                src="/static/banners/topnews.jpg"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height row wrap>
                    <v-flex xs12 center flexbox>
                      <div>
                        <div class= "display-1 white--text">The latest from Betty Slip</div>
                        <div class="headline white--text">all the news that matters...to us.</div>
                      </div>
                    </v-flex>
                    <v-flex xs12 align-end flexbox>
                      <div>
                        <v-btn >Read it</v-btn>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class="blue" flat >
              <div class="headline black--text">Latest News</div>
            </v-card>
          </v-flex>
          <v-flex xs6 v-for="post in posts" :key="post.id">
            <v-card class="red" flat>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs5>
                    <v-card-media
                      :src="post.imageUrl"
                      height="150px"
                      contain
                    ></v-card-media>
                  </v-flex>
                  <v-flex xs7>
                    <div>
                      <div class= "headline">{{post.title}}</div>
                      <div>{{post.content | truncate }}</div>
                      <span class="grey--text">{{ post.date | date }}</span>
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

    <v-flex md3 pa-2>
      <v-card class="grey" flat>
        <v-card-title class="black--text">
          <div>
            <h3 class="headline mb-0">Trending</h3>
          </div>
        </v-card-title>
      </v-card>

      <v-card class="pink" v-for="trend in trends" :key="trend.id" flat >
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
                <div class= "body1"><b>{{ trend.title }}</b></div>
                <div class="caption">{{trend.content | truncate }}</div>
                <span class="grey--text">{{ trend.date | date }}</span>
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
              <v-card-media
                src="/static/banners/signup1-1.jpg"
                height="650px"
              ></v-card-media>
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
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.$store.getters.user !== null && this.$store.getters.user !== undefined) {
          menuItems = [
            {icon: '', title: 'Streamers', link: '/streamers'},
            {icon: '', title: 'News', link: '/news'},
            {icon: '', title: 'Babes', link: '/babes'},
            {icon: '', title: 'Vlogs', link: '/vlogs'},
            {icon: '', title: 'Reviews', link: '/reviews'},
            {icon: '', title: 'Bonus Box', link: '/bonus'},
            {icon: '', title: 'Betty\'s Acca', link: '/acca'},
            {icon: '', title: 'Club Betty', link: '/club'}
          ]
        }
        return menuItems
      },
      info () {
        return this.$store.getters.userdisplayname
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
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .rectangle-18 {
      color: #bea67c;
      }
</style>
<style scoped>
  .car-top {

    }
</style>
<style scoped>
  .tabtextcolor {
    color: #bea67c;
    }
</style>
<style scoped>
  .bonuscardcolor {
    background-color: #faf3e6;
    }
</style>
<style scoped>
  .tabcolor {
    color: #262626;
    }
</style>
<style scoped>
  .claimbutton {
    color: white;
    background-color: #bea67c;
    }
</style>
<style scoped>
  .title {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 12em;
    padding: 20px;
    }
</style>
