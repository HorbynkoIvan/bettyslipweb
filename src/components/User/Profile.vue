<template>
    <v-container fluid class="betty_background">
        <v-layout row>
            <v-flex xs12>
            <ul class="profile_menu">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>
            </v-flex>

        </v-layout>
        <v-layout row wrap>
            <v-spacer></v-spacer>
            <v-flex>
                <v-card-media
                        class="profile_avatar right"
                        src="/static/rnd_streamer.png"
                        contain
                ></v-card-media>
            </v-flex>
            <v-flex class="profile_username_parent text-xs-center text-sm-left text-md-left">
                <div class="profile_username">
                    <div class="profile_username_name text-xs-center">username</div>
                    <div class="profile_username_member text-xs-center">Bronze Member<br></div>
                </div>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>
        <v-layout row class="profile_about" wrap>
            <v-flex sm12 md7>
                <p class="profile_about_bio">Bio <v-icon class="profile_about_icon">create</v-icon></p>
                <p>How do we know that rain isn't tears falling from sad clouds? They could be but you've never asked
                    a cloud, have you? Birds fly but ostriches can’t and they are birds. I wonder if there is a reason
                    behind that. I really like days where it rains all day, it is super relaxing. Birds actually fly
                    backwards which means that planes do the same. You should listen to music instead of eating.
                    It makes you feel much better.</p>
                <p class="profile_about_contact">Contact <v-icon class="profile_about_icon">create</v-icon></p>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs12 sm6 md4>
                <div>
                    <v-icon class="profile_about_icon_info right">info outline</v-icon>
                </div>
                    <img src="/static/profile/arrow.jpg" alt="arrow" class="text-md-right profile_about_arrow"/>
                    <div class="profile_about_level">
                        <p>Your current level: <span>Bronze</span></p>
                        <p>Next level: <span>Silver</span></p>
                        <p>Points to reach next level: <span>120</span></p>
                    </div>
            </v-flex>
        </v-layout>

        <v-divider class="divider1 divider2"></v-divider>
        <v-layout row>
                <p class="profile_favorite_games">Favorite Games</p>
        </v-layout>
        <v-layout row>
            <v-spacer></v-spacer>
            <v-flex>
                    <v-card-media class=" profile_favorite_card">
                    </v-card-media>
            </v-flex>
            <v-flex class="profile_favorite_card2">
                    <v-card-media class="profile_favorite_card">
                    </v-card-media>
            </v-flex>
            <v-flex class="profile_favorite_card3">
                    <v-card-media class="profile_favorite_card">
                    </v-card-media>
            </v-flex>
            <v-flex class="profile_favorite_card4">
                    <v-card-media class="profile_favorite_card">
                    </v-card-media>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex>
                <a href="#" class="see-all">See All</a>
            </v-flex>
        </v-layout>
        <v-layout row>
            <p class="profile_played_games">Recently Played</p>
        </v-layout>
        <v-layout row>
            <v-spacer></v-spacer>
            <v-flex>
                <v-card-media class=" profile_played_card">
                </v-card-media>
            </v-flex>
            <v-flex class="profile_played_card2">
                <v-card-media class="profile_played_card">
                </v-card-media>
            </v-flex>
            <v-flex class="profile_played_card3">
                <v-card-media class="profile_played_card">
                </v-card-media>
            </v-flex>
            <v-flex class="profile_played_card4">
                <v-card-media class="profile_played_card">
                </v-card-media>
            </v-flex>
        </v-layout>
    </v-container>
   </template>
<style scoped>
  .tabtextcolor {
    color: #262626;
    }
  .container{
      padding-left: 5%;
      padding-right: 5%;
  }
  .divider1{
      height: 3px;
      background-color: #bea67c;
  }
  .divider2{
  }
  .profile{
      background-color: #262626;
  }
  .profile_menu{
      float: right;
      list-style: none;
      text-align: center;
  }
  .profile_menu li{
     display: inline-block;
      margin: 0 10px;
  }
  .profile_menu a{
      font-size: 16px;
      text-align: left;
      color: #ffffff;
  }
  .profile_avatar {
      width: 207px;
      height: 207px!important;
      border: solid 8px #a5613e;
      border-radius: 50%;
  }
  .profile_username_parent{
      margin-left: 30px;
  }
  .profile_username_parent:before{
      content: '';
      display: inline-block;
      width:0;
      height: 100%;
      vertical-align: middle;
  }
  .profile_username{
      display: inline-block;
      vertical-align: middle;
  }
  .profile_username_name{
      font-size: 36px;
      font-weight: bold;
      text-align: left;
      color: #ffffff;
  }
  .profile_username_member{
      font-size: 16px;
      font-weight: bold;
      text-align: left;
      color: #a5613e;
  }
  .profile_about{
      margin-top: 2.944rem;
      margin-bottom: 8.187rem;
      font-size: 16px;
      color: #ffffff;
  }
  .profile_about_bio, .profile_about_contact{
      font-weight: bold;
  }
  .profile_about_icon{
      font-size: 17px;
      margin-left: 13px;
      color: #ffffff;
      vertical-align: baseline;
  }
  .profile_about_icon_info{
      font-size: 30px;
      width: 30px;
      color: #ffffff;
      justify-content: inherit;
      margin-bottom: 10px;
  }
  .profile_about_arrow{
     width: 100%;
      height: auto;
      max-height: 100px;
      max-width: 500px;
  }
  .profile_about_level{
    margin:10px 0 0 0;
  }
  .profile_about_level p{
    margin:0;
  }
  .profile_favorite_games, .profile_played_games {
      font-size: 16px;
      font-weight: bold;
      text-align: left;
      color: #ffffff;
      margin-top: 3.125rem;
      margin-bottom: 1.562rem;
  }
  .profile_favorite_card, .profile_played_card {
      width: 292px;
      height: 292px!important;
      background-color: #d8d8d8;
  }
  .see-all {
      font-size: 16px;
      color: #ffffff;
      margin-top: 1.562rem ;
      display: inline-block;
      float: right;
  }
  @media screen and (max-width: 576px) {
      .profile_avatar {
          float: none!important;
          margin-top: 10px;
      }
      .profile_username_parent {
          margin: 0;
          width: 100%;
      }
  }
  @media screen and (max-width: 768px) {
      .profile_favorite_card2, .profile_played_card2 {
          display: none;
      }
  }
  @media screen and (max-width: 1100px) {
      .profile_favorite_card3, .profile_played_card3 {
          display: none;
      }
  }
  @media screen and (max-width: 1350px) {
      .profile_favorite_card4, .profile_played_card4 {
          display: none;
      }
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
