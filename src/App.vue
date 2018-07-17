<template>
  <v-app>
    <v-layout xs12 md12 lg12 class="betty_background" row wrap ma-0 pa-0>
      <v-navigation-drawer temporary class="betty_background" v-model="sideNav">
        <v-list class="betty_background" pa-2>
          <v-list-tile
            v-for="item in mobileItems"
            :key="item.title"
            :to="item.link" >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content  class="tabtextcolor headline">{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
        <v-flex xs12 sm12 md12 lg10 offset-lg1 offset-sm0 offset-md0 class="betty_background">
          <v-container fluid grid-list-md class="betty_background" ma-0 pa-0>
            <v-layout ma-0 pa-0>
              <v-flex xs9 sm9 md2 lg2 ma-0 pa-0 pt-0>
                <v-card class="betty_background hidden-sm-and-down" flat>
                  <img src ="/static/logo_text_website.png" height="95px">
                </v-card>
                <v-card class="betty_background hidden-md-and-up" flat pt-1>
                  <img src ="/static/logo_text_sm.jpg" height="53px">
                </v-card>
              </v-flex>
              <v-flex xs2 sm3 md10 lg10 ma-0 pt-2 class="betty_background hidden-md-and-up">
                <v-card class="betty_background text-xs-right" flat pt-0 ma-0>
                  <img @click.stop="sideNav = !sideNav" src="/static/menu_mobile.jpg" height ="40px">
                </v-card>
              </v-flex>
              <v-flex xs10 sm9 md10 lg10 ma-0 pa-0 center ma-0 pa-0 class="hidden-sm-and-down">
                <v-card class="betty_background " flat>
                  <v-layout pa-1 ma-0 >
                    <v-flex xs9 pt-1 ma-1 hidden-sm-and-down>
                      <v-card class="betty_background" xs12 flat >
                        <div class="body-2 tabtextcolor text-xs-right" v-if="userIsAuthenticated">
                          <v-menu bottom right dark>
                            <img slot="activator" src ="/static/icons/Top_Profile.png" height="30px">
                            <v-list dark>
                              <v-list-tile v-for="item in userItems" :key="item.title" :to="item.link" light>
                                <v-list-tile-action>
                                  <v-icon class="white--text">{{ item.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                          {{topmessage}}
                        </div>
                        <div class="body-2 tabtextcolor text-xs-right" v-else>
                          <img src ="/static/icons/Top_Profile.png" height="30px">
                          <router-link to="/signin">Sign In</router-link>    |   <router-link to="/signup">Sign Up</router-link>
                        </div>
                      </v-card>
                    </v-flex>
                    <v-flex xs3 pt-1 pr-1 ma-1 class="betty_background">
                      <v-card class="betty_background text-xs-right" xs12 flat>
                        <img src ="/static/icons/Menu_Youtube.png" height="30px">
                        <img src ="/static/icons/Menu_FB.png" height="30px">
                        <img src ="/static/icons/Menu_Insta.png" height="30px">
                        <img src ="/static/icons/Menu_Google.png" height="30px">
                      </v-card>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-card class="betty_background" flat>
                        <v-tabs dark grow :scrollable="false">
                          <v-tabs-bar class="betty_background text-sm-right">
                            <v-tabs-slider class="grey lighten-3"></v-tabs-slider>
                              <v-tabs-item
                                v-for="item in menuItems"
                                :key="item.title"
                                :to="item.link"
                                >
                                <div class= "subheading tabtextcolor"><b>{{ item.title }}</b></div>
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
    </v-layout>
    <v-divider class="divider1"></v-divider>

    <main>
      <router-view></router-view>
    </main>



    <v-layout ma-0 pa-0 fluid class="betty_background">
      <v-flex xs12  pa-0 ma-0>
        <v-divider class="divider1"></v-divider>
      </v-flex>
      <br>
      <br>
    </v-layout>

    <v-layout xs12 md12 class="betty_background" row wrap ma-0 pa-0>
      <v-flex xs12 sm6 md10 offset-sm3 offset-md1>
        <v-container fluid grid-list-md class="betty_background">
          <v-layout ma-0 pa-0>
            <v-flex xs3 offset-xs1>
              <v-card class="betty_background text-xs-center" flat>
                <div class="tabtextcolor">Terms and Privacy</div>
                </v-card>
              </v-flex>
              <v-flex xs3 offset-xs4>
                <v-card class="betty_background text-xs-center" flat>
                  <div class="tabtextcolor">Work With Betty</div>
                  </v-card>
                </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm6 md10 offset-sm3 offset-md1>
          <v-container fluid grid-list-md class="betty_background">
            <v-layout ma-0 pa-0>
              <v-flex xs3 offset-xs1>
                <v-card class="betty_background text-xs-center" flat>
                  <div class="tabtextcolor">Contact</div>
                  </v-card>
                </v-flex>
                <v-flex xs3 offset-xs4>
                  <v-card class="betty_background text-xs-center" flat>
                    <div class="tabtextcolor">About Us</div>
                    </v-card>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        <v-flex xs12 sm6 md10 offset-sm3 offset-md1>
          <v-container fluid grid-list-md class="betty_background">
            <v-layout ma-0 pa-0>
              <v-flex xs8 offset-xs2>
                <v-card class="betty_background text-xs-center" flat>
                  <img src ="/static/icons/Menu_Youtube.png" height="30px">
                  <img src ="/static/icons/Menu_FB.png" height="30px">
                  <img src ="/static/icons/Menu_Insta.png" height="30px">
                  <img src ="/static/icons/Menu_Google.png" height="30px">
                  <br>
                  <div class="tabtextcolor">© Betty Slip 2017</div>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
    </v-layout>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        displayuserName: false
      }
    },
    watch: {
      topmessage (value) {
        if (value !== null && value !== undefined) {
          console.log('**** NOT NULL or UNDEF user ***')
        }
      }
    },
    computed: {
      mobileItems () {
        let mobileItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          mobileItems = [
            {icon: '', title: 'Bonus Box', link: '/bonus'},
            {icon: '', title: 'News', link: '/news'},
            {icon: '', title: 'Streamers', link: '/streamers'},
            {icon: '', title: 'Vlogs', link: '/vlogs'},
            {icon: '', title: 'Club Betty', link: '/profile'},
            {icon: '', title: 'Acca', link: '/acca'},
            {icon: '', title: 'Reviews', link: '/reviews'},
            {icon: '', title: 'Betty\'s Babes', link: '/babes'}
          ]
        }
        return mobileItems
      },
      menuItems () {
        let menuItems = [
          {icon: '', title: 'Bonus Box', link: '/bonus'},
          {icon: '', title: 'News', link: '/news'},
          {icon: '', title: 'Streamers', link: '/streamers'},
          {icon: '', title: 'Vlogs', link: '/vlogs'},
          {icon: '', title: 'Club Betty', link: '/profile'},
          {icon: '', title: 'Acca', link: '/acca'},
          {icon: '', title: 'Reviews', link: '/reviews'},
          {icon: '', title: 'Betty\'s Babes', link: '/babes'}
        ]
        return menuItems
      },
      userItems () {
        let userItems = [
          {icon: 'person_outline', title: 'Sign In', link: '/signin'},
          {icon: 'person_add', title: 'Sign Up', link: '/signup'}
        ]
        if (this.userIsAuthenticated) {
          userItems = [
            {icon: 'perm_identity', title: 'Profile', link: '/profile'},
            {icon: 'exit_to_app', title: 'Sign Out', link: '/signout'}
          ]
        }
        return userItems
      },
      userinfo () {
        if (this.userIsAuthenticated) {
          return this.$store.getters.user
        }
      },
      topmessage () {
        if (this.$store.getters.userdisplayname === null) {
          console.log('user is null')
          return
        }
        if (this.$store.getters.userdisplayname === undefined) {
          console.log('user is undef')
          return
        }
        if (this.$store.getters.userdisplayname !== null) {
          console.log('setting user name display')
          var message = 'Welcome, '
          message += this.$store.getters.userdisplayname
          return message
        }
        return message
      },
      userIsAuthenticated () {
        console.log('*}}}{{{{}}}}*')
        console.log(this.$store.getters.user)
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>


<style scoped>
  .topnavcolor {
    color: #121212;
    }
  .mobilenavcolor {
    color: #bea67c;
  }
</style>

<style lang="stylus">
  @import './stylus/main'
</style>

<style scoped>
  .tabtextcolor {
    color: #bea67c;
    }
    .divider1{
        height: 2px;
        background-color: #bea67c;
    }
    .divider2{
    }
    /* unvisited link */
    a:link {
        color: #bea67c;
    }

    /* visited link */
    a:visited {
        color: #bea67c;
    }

    /* mouse over link */
    a:hover {
        color: #bea67c;
    }

    /* selected link */
    a:active {
        color: #bea67c;

    }
</style>
