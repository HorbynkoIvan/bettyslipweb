<template>
  <v-container fluid grid-list-md pa-2 ma-0 class="mainbg">
   <v-layout row wrap>
     <v-flex d-flex xs12 sm6 md9 pa-1>
       <v-layout row wrap >
         <v-flex d-flex>
           <v-layout row wrap>
             <v-flex d-flex
               v-for="offer in offers"
               :key="offer.id"
               xs12
               md4
               pb-2
             >
              <v-card class="grey lighten-2">
                <v-card-media height = "175px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <span class="#4a4a4a">Vlog Name: {{offer.description}}</span>
                    <div>{{offer.date| date }}</div>

                  </div>
                </v-card-title>
              </v-card>

             </v-flex>
           </v-layout>
         </v-flex>
       </v-layout>
     </v-flex>
     <v-flex d-flex xs12 sm6 md3 child-flex>
       <v-card class="white">

           <div class="text-xs-center">
             <h3 class="headline mb-0">Latest</h3>
           </div>
           <v-card-media src="" contain height="100">
           </v-card-media>
         <div class ="text-xs-left">
           <p class="subtitle mb-0 pa-2">Vlog Name</p>
           <p class="subtitle mb-0 pa-2">Date and time</p>
         </div>
         <v-divider></v-divider>

         <v-card-media src="" contain height="100">
         </v-card-media>
       <div class ="text-xs-left" pa-2 ma-2>
         <p class="subtitle mb-0 pa-2">Vlog Name</p>
         <p class="subtitle mb-0 pa-2">Date and time</p>
       </div>
          <v-divider></v-divider>
          <v-card-media src="" contain height="100">
          </v-card-media>
        <div class ="text-xs-left">
          <p class="subtitle mb-0 pa-2">Vlog Name</p>
          <p class="subtitle mb-0 pa-2">Date and time</p>
        </div>
       </v-card>
     </v-flex>
   </v-layout>
 </v-container>
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

      meetups () {
        return this.$store.getters.featuredMeetups
      },
      offers () {
        return this.$store.getters.loadedOffers
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
