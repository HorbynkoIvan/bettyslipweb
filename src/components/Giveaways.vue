<template>
  <v-container class="mainbg">
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
       <div class="headline">BettySlip give aways! Enter now to win</div>
       <br>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md4 pr-5 pl-5 v-for="prize in prizes" :key="prize.id">
        <div>
      <v-card class="giveawaycard">
       <v-card-media :src= "prize.imageUrl" height = "300px" width="400px">
       </v-card-media>
       <v-card-title primary-title>
         <div>
           <div class="headline">{{prize.title}}</div>
           <span class="#4a4a4a">{{prize.details}}</span>
           <div>Begins: {{ prize.date | date }}</div>

         </div>
       </v-card-title>
       <v-card-actions class="mb-2">
         <v-btn left class="giveawaybutton">Enter!</v-btn>
         <v-spacer></v-spacer>
         <v-btn class="text-xs-right">
           <v-icon>info</v-icon>
         </v-btn>
       </v-card-actions>
     </v-card>
   </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      filterItems () {
        let filterItems = [
          {icon: 'face', title: 'Casino Bonus', link: '/signup'},
          {icon: 'face', title: 'Sports Bonus', link: '/signup'},
          {icon: 'face', title: 'Poker Bonus', link: '/signup'},
          {icon: 'face', title: 'E-Sports Bonus', link: '/signup'},
          {icon: 'face', title: 'No Deposit Bonus', link: '/signup'},
          {icon: 'face', title: 'Bitcoin Bonus', link: '/signup'}
        ]
        return filterItems
      },

      meetups () {
        return this.$store.getters.featuredMeetups
      },
      offers () {
        return this.$store.getters.loadedOffers
      },
      prizes () {
        return this.$store.getters.loadedPrizes
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
