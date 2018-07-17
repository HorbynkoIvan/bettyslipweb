<template>
      <v-layout>
        <v-flex xs12 sm8 md12 lg7 offset-lg1 offset-md0>
          <v-container fluid grid-list-md class="white lighten-4">
            <v-layout row wrap>

              <v-flex xs12>
                <v-card class="white" flat>

                  <div class="headline black--text">Latest Betty Babes</div>
                </v-card>
              </v-flex>
              <v-container fill-height fluid>
                <v-layout fill-height row wrap>
                  <v-flex xs11 md4 sm6 lg4 v-for="babe in babes" :key="babe.id">
                    <v-card class="white">
                      <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                          <v-flex xs12>
                            <div class="text-xs-center">
                              <div><img v-img="{ title: babe.title }" :src="babe.imageUrl" height="250px"></div>
                              <v-speed-dial top left direction="top" transition="slide-x-reverse-transition">
                                <v-btn
                                   slot="activator"
                                   class="betty_background"
                                   dark
                                   fab
                                   small
                                   v-model="fab"
                                 >
                                   <v-icon>share</v-icon>

                                 </v-btn>
                                 <v-btn
                                   fab
                                   dark
                                   small
                                   class="indigo"
                                 >
                                   <v-icon>fa-facebook</v-icon>
                                 </v-btn>
                                 <v-btn
                                   fab
                                   dark
                                   small
                                   class="green"
                                 >
                                   <v-icon>fa-whatsapp</v-icon>
                                 </v-btn>
                                 <v-btn
                                   fab
                                   dark
                                   small
                                   class="blue"
                                 >
                                   <v-icon>fa-twitter</v-icon>
                                 </v-btn>
                                 <v-btn
                                   fab
                                   dark
                                   small
                                   class="orange"
                                 >
                                   <v-icon>fa-instagram</v-icon>
                                 </v-btn>
                              </v-speed-dial>
                            </div>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>

                  </v-flex>
                </v-layout>
              </v-container>

            </v-layout>
          </v-container>
        </v-flex>

        <v-flex sm4 md5 lg3 pa-2 class="hidden-xs-only">
          <v-card class="white" flat>
            <v-card-title class="black--text">
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
                    src="/static/banners/banner_wheel_signup.jpg"
                    height="600px" contain
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
      babes () {
        return this.$store.getters.loadedBabes
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
<style>
.rectangle-11 {
  	width: 292px;
  	height: 234px;
  	background-color: #ffffff;
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
