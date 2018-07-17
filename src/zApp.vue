<template>
  <v-app>
    <v-toolbar dark flat class="mainbg" origin="center center">
      <v-container class="text-lg-right text-md-right hidden-xs-only ma-0 pa-0">
        <div class="tabtextcolor headline pa-2 ma-0" v-if ="userinfo" origin="center center">
          Welcome, {{userinfo.displayname}}
          <img src ="/static/icons/Facebook.svg">
          <img src ="/static/icons/Twitch.svg">
          <img src ="/static/icons/Youtube.svg">
        </div>
      </v-container>
    </v-toolbar>
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
    <!--
    <v-toolbar flat>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
    </v-toolbar>
    -->
    <v-container class="logomain">
      <img src ="/static/bettylogo.png" width ="80%">
    </v-container>
    <v-navigation-drawer temporary v-model="sideNav" class="topbar" >
      <v-list class="topbar">
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-content class="tabtextcolor" >{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-divider class="grey darken-3"></v-divider>

    <main>
      <router-view></router-view>
    </main>
    <v-footer class="footer">
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
        <div><h6>© {{ new Date().getFullYear() }}</h6></div>
    </v-footer>
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
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: '', title: 'News', link: '/news'},
            {icon: '', title: 'Bonus Box', link: '/bonus'},
            {icon: '', title: 'Streamers', link: '/streamers'},
            {icon: '', title: 'Vlogs', link: '/vlogs'},
            {icon: '', title: 'Reviews', link: '/reviews'},
            {icon: '', title: 'Club Betty', link: '/club'},
            {icon: '', title: 'Betty\'s Acca', link: '/acca'},
            {icon: '', title: 'Betty Babes', link: '/babes'}
          ]
        }
        return menuItems
      },
      userinfo () {
        if (this.userIsAuthenticated) {
          return this.$store.getters.user
        }
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
  .logomain {
    position: absolute;
    top: 0px;
    left: 0px;
    }
</style>
<style scoped>
  .tabtextcolor {
    color: #bea67c;
    }
</style>
<style scoped>
  .tabcolor {
    color: #262626;
    }
</style>
<style lang="stylus">
  @import './stylus/main'
</style>
