<template>
  <v-layout>
    <v-flex xs12 sm6 md7 offset-sm3 offset-md1>
      <v-container fluid grid-list-md class="white lighten-4">
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="white" flat>

              <v-container fluid grid-list-lg>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card-media
                      :src="post.detailimageUrl"
                      height="300px"
                    ></v-card-media>
                  </v-flex>
                  <v-card-actions>
                    <img src="/static/icons/share_Facebook.png" height="25px">
                    <img src="/static/icons/share_Google.png" height="25px">
                    <img src="/static/icons/share_Twitter.png" height="25px">
                    <img src="/static/icons/share_Whatsapp.png" height="25px">
                  </v-card-actions>
                  <v-flex xs12>

                    <div >
                      <div class= "headline">{{post.title}}</div>
                      <br>
                      <div>{{post.content }}</div>
                      <br>
                      <span class="grey--text">{{ post.date | date }}</span>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
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
              <v-card-media src="/static/banners/banner4.jpg" height = "600px">
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
    props: ['id'],
    computed: {
      post () {
        return this.$store.getters.loadedArticle(this.id)
      },
      trends () {
        return this.$store.getters.loadedTrends
      }
    }
  }
</script>
