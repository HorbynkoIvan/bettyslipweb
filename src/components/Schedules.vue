<template>
  <v-container class="mainbg">
    <v-layout row wrap v-for="streamer in streamers" :key="streamer.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="schedulecard">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="streamer.imageUrl"
                  height="220px"
                ></v-card-media>
              </v-flex>
              <v-flex md8>
              <v-card class="white" offset-md1>
                <v-container fluid>
                  <v-layout>
                    <v-flex>
                      <v-card-title primary-title>
                          <div><h5>{{ streamer.title }}</h5></div>
                      </v-card-title>
                      <div>{{ streamer.date | date }}</div>
                      <div>{{ streamer.schedule }}</div>
                      <div><v-btn class="claimbutton">Watch!</v-btn></div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      streamers () {
        return this.$store.getters.loadedStreamers
      }
    }
  }
</script>
