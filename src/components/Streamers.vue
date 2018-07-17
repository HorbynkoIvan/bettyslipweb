<template>
 <!-- <v-container fluid grid-list-md class="mainbg">
    <v-layout row wrap v-for="streamer in streamers" :key="streamer.id">
      <v-flex xs12 sm12 md11 pa-0 ma-0>
          <v-container class="text-xs-center">
            <v-layout row wrap class="mb-2">
              <v-flex xs12 sm12 md12 offset-sm0 offset-md2>
                <v-card class="white">
                  <v-layout row wrap>
                    <v-flex d-flex xs12 sm6 md4 offset-md0 >
                      <v-card class="grey lighten-3" dark flat>
                        <v-card-media src="/static/rnd_streamer.png" height ="150px" contain>
                        </v-card-media>
                        <v-card-title>

                        </v-card-title>
                        <v-card-text>
                          <div >
                            <v-btn primary light>Stream</v-btn>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex d-flex xs12 sm6 md8 >
                      <v-layout row wrap>
                        <v-flex d-flex>
                          <v-card class="white" dark flat>
                            <br>
                            <p class="text-xs-center tabtextcolor title">BIO: {{ streamer.title }}</p>
                            <v-divider></v-divider>
                            <v-card-text class="tabtextcolor text-xs-left subheading">
                              {{streamer.bio}}
                            </v-card-text>
                          </v-card>
                            <v-divider class="tabtextcolor"></v-divider>
                        </v-flex>
                        <v-flex d-flex>
                          <v-layout row wrap>
                            <v-flex d-flex xs12>

                            <v-card
                            class="white black&#45;&#45;text"
                            dark
                            flat
                            >
                            <v-card-text>
                              <img src="/static/icons/man.svg" height ="30px"/>

                                 1000 followers
                              <img src="/static/icons/game-controller.svg" height ="30px"/>

                                {{streamer.gamesplayed}}
                              <img src="/static/icons/clock.svg" height ="30px"/>
                                 {{streamer.schedule}}
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </v-flex>

  </v-layout>
</v-container>-->
    <v-container fluid class="streamer">
        <v-layout row v-for="streamer in streamers" :key="streamer.id" pb-4 pt-4 >
            <v-flex xs12 class="hidden-sm-and-down">
                <v-card class="streamer_card white">
                    <v-container fluid class="streamer_container">
                        <v-layout row>
                            <v-flex class="streamer_card_imageblock">
                                <v-card-media
                                        class="streamer_card_image"
                                        src="/static/rnd_streamer.png"
                                        contain
                                ></v-card-media>
                               <!-- <div class="streamer_card_btnbar text-xs-center">
                                    <v-btn fab class="streamer_card_btn ">
                                        <img src="/static/streamers/icons_Facebook.png" alt=""/>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn">
                                        <img src="/static/streamers/icons_VK.png" alt=""/>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn">
                                        <img src="/static/streamers/icons_instagram.png" alt=""/>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn">
                                        <img src="/static/streamers/icons_Youtube.png" alt=""/>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn">
                                        <img src="/static/streamers/icons_Twitter.png" alt=""/>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn">
                                        <img src="/static/streamers/icons_Twitch.png" alt=""/>
                                    </v-btn>
                                </div> -->
                                <div class="streamer_card_btnbar text-xs-center">
                                    <v-btn fab class="streamer_card_btn" dark>
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn" dark>
                                        <i class="fa fa-vk" aria-hidden="true"></i>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn" dark>
                                        <i class="fa fa-instagram" aria-hidden="true"></i>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn" dark>
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn" dark>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </v-btn>
                                    <v-btn fab class="streamer_card_btn" dark>
                                        <i class="fa fa-twitch" aria-hidden="true"></i>
                                    </v-btn>
                                </div>
                            </v-flex>
                            <v-flex class="streamer_card_contentblock">
                                <v-container class="card_content_container">
                                    <v-layout row>
                                        <v-flex class="text-sm-right">
                                            <p class="card_content_sponsor">sponsored by</p>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs12 class="text-sm-center">
                                            <h5 class="card_content_title">{{streamer.title}}</h5>
                                        </v-flex>
                                        <v-flex class="text-sm-right card_content_casino">
                                            <img src="/static/casinos/Buran1.png" alt=""/>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex>
                                            <p>{{streamer.bio}}</p>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row mt-2>
                                        <v-flex>
                                            <div>
                                                <i class="fa fa-users info_icon" aria-hidden="true"></i>
                                                <span>{{streamer.followers}}</span>
                                            </div>
                                        </v-flex>
                                        <v-flex>
                                            <div>
                                                <i class="fa fa-gamepad info_icon" aria-hidden="true"></i>
                                                <span>{{streamer.gamesplayed}}</span>
                                            </div>
                                        </v-flex>
                                        <v-flex>
                                            <div>
                                                <i class="fa fa-clock-o info_icon" aria-hidden="true"></i>
                                                <span>{{streamer.schedule}}</span>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row>
                                        <v-flex xs12 class="text-sm-center">
                                            <v-btn dark class="card_content_btn_watch">WATCH</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs12 class="hidden-md-and-up">
                <v-card class="streamer_mob_card white">
                    <v-container fluid class="streamer_container">
                        <v-layout row>
                            <v-flex class="text-xs-right mt-2 mr-2">
                                <p class="mob_card_content_sponsor">sponsored by</p>
                                <div class="mob_card_content_casino">
                                    <img src="/static/casinos/Buran1.png" alt=""/>
                                </div>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex class="mob_card_imageblock">
                                <v-card-media
                                        class="mob_card_image"
                                        src="/static/rnd_streamer.png"
                                        contain
                                ></v-card-media>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <h5 class="mob_card_content_title">betty slip</h5>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 class="text-xs-center">
                                <p class="mob_card_content_streamer">Streamer</p>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <div class="mob_card_btnbar text-xs-center">
                                <v-btn fab class="streamer_card_btn" dark>
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </v-btn>
                                <v-btn fab class="streamer_card_btn" dark>
                                    <i class="fa fa-vk" aria-hidden="true"></i>
                                </v-btn>
                                <v-btn fab class="streamer_card_btn" dark>
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </v-btn>
                                <v-btn fab class="streamer_card_btn" dark>
                                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                </v-btn>
                                <v-btn fab class="streamer_card_btn" dark>
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </v-btn>
                                <v-btn fab class="streamer_card_btn" dark>
                                    <i class="fa fa-twitch" aria-hidden="true"></i>
                                </v-btn>
                                </div>
                            </v-layout>
                        <v-layout row mt-2>
                            <v-flex xs4 class="mob_card_users">
                                <div mt1 class="mob_card_info text-xs-center">
                                    <i class="fa fa-users info_icon" aria-hidden="true"></i>
                                    <p>{{streamer.followers}}</p>
                                    <p>Folowers</p>
                                </div>
                            </v-flex>
                            <v-flex xs4 class="mob_card_gamepad">
                                <div class="mob_card_info text-xs-center">
                                    <i class="fa fa-gamepad info_icon" aria-hidden="true"></i>
                                    <p>{{streamer.gamesplayed}}</p>
                                </div>
                            </v-flex>
                            <v-flex xs4 class="mob_card_clock">
                                <div class="mob_card_info text-xs-center">
                                    <i class="fa fa-clock-o info_icon" aria-hidden="true"></i>
                                    <p>{{streamer.schedule}}</p>
                                </div>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex class="mr-3 ml-3">
                                <p>{{streamer.bio}}</p>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 class="text-xs-center text-sm-center">
                                <v-btn dark class="mob_card_content_btn_watch">WATCH</v-btn>
                            </v-flex>
                        </v-layout>

                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
        <br>
    </v-container>
</template>
<style scoped>
/*    @import '../stylus/variables.styl'*/
    .streamer {
      background-color: #121212;
      color: #121212;
    }
    .streamer_card {
        color: #262626;
        max-width: 1127px;
        width: 82%;
        height: 363px!important;
        margin: 0 auto;
    }
    .streamer_container{
      padding: 0;
  }
    .streamer_card_imageblock {
        width: 25%; /*283/1127*/
        height: 363px!important;
        background-color: #f3f3f3;
    }
    .streamer_card_image {
      width: 187px;
      height: 187px!important;
      max-width: 100%;
      /*height: auto!important;*/
      margin: 48px auto 0 auto;
    }
    .streamer_card_btnbar {
    margin: 54px auto;
    }
    .streamer_card_btn {
        width: 25px;
        height: 25px;
        margin: 3px;
        background-color: #bea67c!important;
    }
    .streamer_card_contentblock {
        width: 75%;
        height: 363px!important;

    }
    .card_content_container {
        padding-left: 48px;
        padding-right: 48px;
    }
    .card_content_sponsor{
        margin-top: 10px;
        margin-bottom: 0;
        font-weight: bold;
        color: #2db9e9;
        text-transform: uppercase;
    }
    .card_content_title{
        font-weight: bold;
        color: #262626;
        text-transform: capitalize;
    }
    .card_content_casino{
        max-width: 115px;
    }
    .card_content_casino img{
        width: 100%;
        height: auto;
    }
    .card_content_btn_watch{
        width: 185px;
        height: 45px;
        border-radius: 3px;
        background-color: #bea67c!important;
        font-size: 16px;
        font-weight: bold;
        margin-top: 24px;
    }
    /*for mobile version*/
    @media screen and (max-width: 576px) {
    .streamer {
        background-color: #ffffff;
    }
    .profile_username_parent {
        margin: 0;
        width: 100%;
    }
}
    .streamer_mob_card {
        width: 96%;
        min-height: 650px;
        margin: 0 auto;
    }
    .mob_card_content_sponsor{
        font-size: 10px;
        font-weight: bold;
        color: #2db9e9;
        text-transform: uppercase;
        margin-bottom: 0;
    }
    .mob_card_content_casino{
         max-width: 82px;
         float: right;
}
    .mob_card_content_casino img{
        width: 100%;
        height: auto;
    }
    .mob_card_imageblock {
        background-color: inherit;
    }
    .mob_card_image {
        width: 187px;
        height: 187px!important;
        max-width: 100%;
        margin: 0 auto 18px auto;
    }
    .mob_card_content_title{
        font-weight: bold;
        color: #262626;
        text-transform: capitalize;
        font-size: 20px;
        margin-bottom: 4px;
}
    .mob_card_content_streamer{
        font-size: 12px;
        color: #c0c0c0;
        margin-bottom: 12px;
}
    .mob_card_btnbar {
        margin: 0 auto 26px auto;
    }
    .mob_card_info {
        background-color: #f6f5f5;
        width: 100%;
        height: 4.9rem; /*79/16*/
        background-color: #f6f5f5;
        margin-bottom: 24px;
        font-size: 10px;
}
    .mob_card_info p{
        margin: 0;
    }
    .mob_card_users{
        padding-right: 1px;
    }
    .mob_card_gamepad{
        padding-left: 1px;
        padding-right: 1px;
    }
    .mob_card_clock{
        padding-left: 1px;
    }
    .mob_card_content_btn_watch{
    width: 166px;
    height: 40px;
    border-radius: 3px;
    background-color: #bea67c!important;
    font-size: 16px;
    font-weight: bold;
}
    .info_icon{
        font-size: 25px;
        margin-top: 8px;
    }
</style>
<script>
  export default {
    computed: {
      streamers () {
        return this.$store.getters.loadedStreamers
      },
      banners () {
        return this.$store.getters.streamBanners
      },
      meetups () {
        return this.$store.getters.featuredMeetups
      }
    }
  }
</script>
