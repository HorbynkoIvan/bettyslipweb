import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: '/static/tb_bonus1.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Fantastic 50 free spin bonus, 200% cash match on deposit!!',
        date: new Date(),
        location: 'Optimaplay Casino',
        description: 'Tallinn, Estonia!'
      },
      {
        imageUrl: '/static/tb_bonus2.jpg',
        id: 'offerid1',
        title: 'Enjoy $200 free bonus credits',
        date: new Date(),
        location: 'Unibet',
        description: 'Play to win big!'
      },
      {
        imageUrl: '/static/tb_bonus3.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Bingo madness!',
        date: new Date(),
        location: 'Magic City Casino',
        description: 'Miami, Florida'
      }
    ],
    streamBanners: [
      {
        imageUrl: 'static/portraits/streamer_car.png',
        id: 'afajfjadfaadfa323',
        title: 'Fantastic 50 free spin bonus, 200% cash match on deposit!!',
        date: new Date(),
        location: 'Optimaplay Casino',
        description: 'Tallinn, Estonia!'
      },
      {
        imageUrl: 'static/banners/dealer_banner_2.jpg',
        id: 'offerid1',
        title: 'Enjoy $200 free bonus credits',
        date: new Date(),
        location: 'Unibet',
        description: 'Play to win big!'
      },
      {
        imageUrl: 'static/banners/dealer_banner_1.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Bingo madness!',
        date: new Date(),
        location: 'Magic City Casino',
        description: 'Miami, Florida'
      }
    ],
    loadedBabes: [
      {
        imageUrl: 'static/babes/babe1.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Jane in the tshirt!!',
        date: new Date(),
        location: 'Dubai',
        description: 'Hot hot hot!'
      },
      {
        imageUrl: 'static/babes/babe2.jpg',
        id: 'offerid1',
        title: 'Betty goes to school',
        date: new Date(),
        location: 'Texas',
        description: 'She has some learnin to do'
      },
      {
        imageUrl: 'static/babes/babe3.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Dirty Betty',
        date: new Date(),
        location: 'Germany',
        description: 'What did this betty get into?'
      },
      {
        imageUrl: 'static/babes/babe4.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Ping and Pong',
        date: new Date(),
        location: 'Dubai',
        description: 'Ni hao say hello to our friends!'
      },
      {
        imageUrl: 'static/babes/babe5.jpg',
        id: 'offerid1',
        title: 'Betty going fast',
        date: new Date(),
        location: 'Texas',
        description: 'Betty is revved up and ready to go and on the dirt track'
      },
      {
        imageUrl: 'static/babes/babe6.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Heather and Tiffany',
        date: new Date(),
        location: 'Germany',
        description: 'Do you have the energy to keep up with these two?'
      }
    ],
    loadedTrending: [
      {
        imageUrl: '/static/banners/poker.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Jane in the tshirt!!',
        date: new Date(),
        location: 'Dubai',
        content: 'Hot hot hot!'
      },
      {
        imageUrl: '/static/banners/sportsbook2.jpg',
        id: 'offerid1',
        title: 'Betty goes to school',
        date: new Date(),
        location: 'Texas',
        content: 'She has some learnin to do and its very hot outside today. Its getting hot in here too now that we think about it'
      },
      {
        imageUrl: '/static/banners/launch.jpg',
        id: 'afajfjadfaadfa323',
        title: 'New slot game by NetEnt',
        date: new Date(),
        category: 'Slots',
        content: 'Today NetEnt realeased a new game based on making so much money. It cost them fifty million euros and took a year in development. Everyone says its the best game in all games ever made.'
      }
    ],
    loadedVlogs: [
      {
        imageUrl: 'static/babes/babe1.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Jane in the tshirt!!',
        date: new Date(),
        location: 'Dubai',
        description: 'Hot hot hot!'
      },
      {
        imageUrl: 'static/babes/babe2.jpg',
        id: 'offerid1',
        title: 'Betty goes to school',
        date: new Date(),
        location: 'Texas',
        description: 'She has some learnin to do'
      },
      {
        imageUrl: 'static/babes/babe3.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Dirty Betty',
        date: new Date(),
        location: 'Germany',
        description: 'What did this betty get into?'
      }
    ],
    loadedPosts: [
      {
        imageUrl: '/static/banners/launch.jpg',
        detailimageUrl: '/static/banners/news_detail_stadium.jpg',
        id: '1',
        title: 'New slot game by NetEnt',
        date: new Date(),
        category: 'Slots',
        content: 'Today NetEnt realeased a new game based on making so much money. It cost them fifty million euros and took a year in development. Everyone says its the best game in all games ever made. Today NetEnt realeased a new game based on making so much money. It cost them fifty million euros and took a year in development. Everyone says its the best game in all games ever made. Everyone says its the best game in all games ever made. Today NetEnt realeased a new game based on making so much money. It cost them fifty million euros and took a year in development. Everyone says its the best game in all games ever made. Everyone says its the best game in all games ever made. Today NetEnt realeased a new game based on making so much money. It cost them fifty million euros and took a year in development. Everyone says its the best game in all games ever made. sdjfs sdfsdf sdfsdf sfdsdf sdfsdf sdfsdf sdfsdf sdfsdf sdfsdf sdfdsfsf sdfdsfsdf safsafdsf sfdsafsdf sfdsdfdsf sadfdssdfsdfsdfsfsdfdsfsdfsdfdsdsfsdfsdfdsfdsf sfsdfsdfsdfsdf sfsdfdsfsdfsdfdsdsfsdfsdfdsfdsf sdfsdf sdfsdfsdfsdfdsfsdfsdfsdf sdfsdfsdfsf sfsdfsdf sdfsdfsdf sdfsdfsdf sfsdfsdfsdf sdfsfsdfsdf sfsdfsfsdfsf sfsdfdsfsfdsdfsf dsfsdfsfsdfs sdfsfsfsfsfsdf sfsfsdfsdfsdfsdfsfsdf'
      },
      {
        imageUrl: '/static/banners/esports.jpg',
        detailimageUrl: '/static/banners/news_detail_esports.jpg',
        id: '2',
        title: 'Meet the betty bot!',
        date: new Date(),
        category: 'SportsBook',
        content: 'The new Betty Slip bot is now fully active in the Twitch stream. This bot lets all our registered users accumulate points which can be used in our giveaways, and for VIP bonus offers! Make sure to add your twitch ID into your profile to be eligible. While the bot is a bit cheecky like Betty it also allows our users to risk points with the !spin command. Good Luck!!!'
      },
      {
        imageUrl: '/static/banners/livedealer.jpg',
        detailimageUrl: '/static/banners/news_detail_casino.jpg',
        id: '3',
        title: 'Velo Partners invests in Foxium',
        date: new Date(),
        category: 'Casino',
        content: 'Velo Partners has opted to invest in game development studio Foxium in a move that will grant the latter access to RNG Foundry’s team and network. Foxium, which has offices in Estonia and Sweden, has produced a host of online gaming titles and has partnerships in place with major operators such as Bet365, Leo Vegas, Mr Green, Betsson and Bet Victor. The studio will now have access to RNG Foundry, which, launched in association with Velo Partners, is a gaming accelerator that aims to both work with and fund entrepreneurial talent in the gaming industry.'
      },
      {
        imageUrl: '/static/banners/poker.jpg',
        detailimageUrl: '/static/banners/news_detail_poker.jpg',
        id: '4',
        title: 'GAMING1 picks up licence in Colombia',
        date: new Date(),
        category: 'Poker',
        content: 'GAMING1 has become the first international gambling firm to secure a casino and sportsbook licence from Colombian regulator Coljuegos in a 50-50 share capital joint venture with local operator Vicca Group. Under the agreement, GAMING1 and Vicca Group have launched Zamba.co, which will be made available on both mobile and desktop, featuring a range of games such as roulette, blackjack and slots. The first wave of titles will be exclusively provided by GAMING1, with additional content from other certified providers to be added in the coming weeks.'
      },
      {
        imageUrl: '/static/banners/general.jpg',
        detailimageUrl: '/static/banners/news_detail_floor.jpg',
        id: '5',
        title: 'Gala Bingo affiliate ad deemed irresponsible',
        date: new Date(),
        category: 'General',
        content: 'Ladbrokes Coral-owned bingo brand Gala Bingo has come under fire from the UK’s Advertising Standard Authority (ASA) over an online ad created by an affiliate which suggested gambling could provide an escape from depression.'
      },
      {
        imageUrl: '/static/banners/sportsbook2.jpg',
        detailimageUrl: '/static/banners/news_detail_sportsbook.jpg',
        id: '6',
        title: 'Did you see that game!!!',
        date: new Date(),
        category: 'Sportsbook',
        content: 'What an incredible game Team A vs Team B was last night. Such an amazing event and the betting action was heavy heavy heavy. 51% betting on team A and 10% betting on Team B'
      },
      {
        imageUrl: '/static/banners/bingo.jpg',
        detailimageUrl: '/static/banners/news_detail_bingo.jpg',
        id: '7',
        title: 'Blue haired bingo?!',
        date: new Date(),
        category: 'bingo',
        content: 'Everyone likes bingo, its simple and easy to play. While you might think its just for little old ladies it can really spice up anyone\'s day. Give it a try for the social action of gambling '
      }
    ],
    loadedPrizes: [
      {
        imageUrl: '/static/prizes/ipad.png',
        id: '1',
        title: 'iPad!',
        date: new Date(),
        details: 'This is the latest iPad available!'
      },
      {
        imageUrl: '/static/prizes/gtx1080ti.jpg',
        id: '2',
        title: 'GTX 1080ti',
        date: new Date(),
        details: 'The fastest video card on the market!'
      },
      {
        imageUrl: '/static/prizes/iphone7.jpg',
        id: '3',
        title: 'iPhone 7',
        date: new Date(),
        details: 'The fastest video card on the market!'
      },
      {
        imageUrl: '/static/prizes/nobel_chair.jpg',
        id: '4',
        title: 'Nobel Chair',
        date: new Date(),
        details: 'Sit in comfort and style while you play your favourite games!'
      },
      {
        imageUrl: '/static/prizes/xboxone.jpg',
        id: '5',
        title: 'Xbox One',
        date: new Date(),
        details: 'Play the latest games with your friends'
      },
      {
        imageUrl: '/static/prizes/trip.jpg',
        id: '6',
        title: 'Fantastic Holiday',
        date: new Date(),
        details: 'The tour Italy in style'
      }
    ],
    loadedStreamers: [
      {
        imageUrl: 'static/portraits/port_icon.png',
        id: '1',
        title: 'Adele',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!',
        bio: 'A QA who enjoys walking, talking and people. Cat person. Birthday: November 5th, Favorite music: electronic, trip-hop, modern rock. Movies/TV shows: Family Guy, Lovely Bones Food: Everything that has meat.',
        gamesplayed: 'Spartak Moscow. Biathlon',
        schedule: 'Mon-Fri 13:00 to 22:00 GMT',
        followers: '1209812'
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        id: '2',
        title: 'Mervi',
        date: new Date(),
        location: 'This casino',
        description: '50 free spins, 100% deposit match up for one milllllllion dollars!',
        bio: 'Psychology student who loves good food, music and hand crafted beer. Proud mother to a Japanese Akita dog. Birthday: 30. April (Taurus) Favorite music: Metalcore, rock Fav. movies: Horror movies Fav. food: Pastry, chocolate and cheese 😛 Fav. games (not casino): Saboteur (card came) Fav. casino games: Birds, Heres.... (I will send the names tomorrow when I come to work.. I wrote the games down 😀 ) Fav. sports/teams: Boston Celtics, Golden State Warriors, Cleveland Cavaliers Hobbys: Concerts, reading Fav. animals: Dogs, cats, raccoons, foxes, squirrels',
        gamesplayed: 'Slots: No More Fruits',
        schedule: 'Mon-Fri 13:00 to 22:00 GMT',
        followers: '1212'
      }
    ],
    loadedVideos: [
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'QP_9rFbvY_Q',
        id: 'afajfjadfaadfa323',
        title: 'Adelle Jones Acca',
        date: new Date(),
        description: 'Talking team A vs Team B and going over blah blah blah blah something winners lets play and bet my lunch money becuase i will win'
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'uQbqY1lL6lo',
        id: 'afajfjadfaadfa323',
        title: 'Marve Acca',
        date: new Date(),
        description: 'Lets talk E-Sports  blah blah blah blah something winners lets play and bet  blah blah blah blah something winners lets play and bet '
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'F_GxPXXLc-w',
        id: 'afajfjadfaadfa323',
        title: 'Bespoms bets',
        date: new Date(),
        description: 'Talking NFL football blah blah blah blah something winners lets play and bet blah blah blah blah something winners lets play and bet '
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'rvYZRskNV3w',
        id: 'afajfjadfaadfa323',
        title: 'Adelle Jones Acca',
        date: new Date(),
        description: 'Talking EPL football team A vs Team B blah blah blah blah something winners lets play and bet  blah blah blah blah something winners lets play and bet '
      }
    ],
    loadedReviews: [
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'HAVNl1xe44g',
        id: 'afajfjadfaadfa323',
        title: 'Adelle Jones Acca',
        date: new Date(),
        category: 'casino',
        description: 'Talking team A vs Team B and going over blah blah blah blah something winners lets play and bet my lunch money becuase i will win'
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'YZEK0ghEfis',
        id: 'afajfjadfaadfa323',
        title: 'Marve Acca',
        date: new Date(),
        category: 'casino',
        description: 'Lets talk E-Sports  blah blah blah blah something winners lets play and bet  blah blah blah blah something winners lets play and bet '
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'CaTsigg9o2M',
        id: 'afajfjadfaadfa323',
        title: 'Bespoms bets',
        date: new Date(),
        category: 'slots',
        description: 'Talking NFL football blah blah blah blah something winners lets play and bet blah blah blah blah something winners lets play and bet '
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: '-Hf5prRZIeg',
        id: 'afajfjadfaadfa323',
        title: 'Adelle Jones and the new IPad Pro',
        date: new Date(),
        category: 'devices',
        description: 'How does the new IPad Pro stack up for the punter? Adelle shows how all the major sportsbetting sites look at act on this new device '
      }
    ],
    loadedAccas: [
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'QP_9rFbvY_Q',
        id: 'afajfjadfaadfa323',
        title: 'Adelle Jones Acca',
        date: new Date(),
        description: 'Talking team A vs Team B and going over blah blah blah blah something winners lets play and bet my lunch money becuase i will win'
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'uQbqY1lL6lo',
        id: 'afajfjadfaadfa323',
        title: 'Marve Acca',
        date: new Date(),
        description: 'Lets talk E-Sports  blah blah blah blah something winners lets play and bet  blah blah blah blah something winners lets play and bet '
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'F_GxPXXLc-w',
        id: 'afajfjadfaadfa323',
        title: 'Bespoms bets',
        date: new Date(),
        description: 'Talking NFL football blah blah blah blah something winners lets play and bet blah blah blah blah something winners lets play and bet '
      },
      {
        imageUrl: 'static/portraits/port_icon.png',
        videoID: 'rvYZRskNV3w',
        id: 'afajfjadfaadfa323',
        title: 'Adelle Jones Acca',
        date: new Date(),
        description: 'Talking EPL football team A vs Team B blah blah blah blah something winners lets play and bet  blah blah blah blah something winners lets play and bet '
      }
    ],
    loadedOffers: [
      {
        imageUrl: '/static/casinos/Cashmio.png',
        id: 'afajfjadfaadfa323',
        title: 'Magic City Casino',
        date: new Date(),
        location: 'Miami baby',
        country: 'Germany',
        category: 'poker',
        description: 'Free spins, cash match!'
      },
      {
        imageUrl: '/static/casinos/Malina1.png',
        id: 'afajfjadfaadfa323',
        title: 'Magic City Casino',
        date: new Date(),
        location: 'Miami baby',
        country: 'Germany',
        category: 'promoted',
        description: 'Free spins, cash match!'
      },
      {
        imageUrl: '/static/casinos/BoaBoa-1.png',
        id: 'afajfjadfaadfa323',
        title: 'Magic City Casino',
        date: new Date(),
        location: 'Miami baby',
        country: 'Germany',
        category: 'promoted',
        description: 'Free spins, cash match!'
      },
      {
        imageUrl: '/static/casinos/Buran.png',
        id: 'afajfjadfaadfa323',
        title: 'Magic City Casino',
        date: new Date(),
        location: 'Miami baby',
        country: 'Germany',
        category: 'promoted',
        description: 'Free spins, cash match!'
      },
      {
        imageUrl: '/static/casinos/Casinia-1.png',
        id: 'offerid1',
        title: 'Fenix Casino',
        date: new Date(),
        location: 'Tallinn, Estonia',
        country: 'germany',
        category: 'casino',
        description: '50 free spins, 100% deposit match!'
      },
      {
        imageUrl: '/static/casinos/Oshi.png',
        id: 'aadsfhbkhlk1241',
        title: 'Hippidromo Casino',
        date: new Date(),
        location: 'Mexico City',
        country: 'germany',
        category: 'bitcoin',
        description: '25 Free spins, 200% match on second deposit!'
      },
      {
        imageUrl: '/static/casinos/Playamo.png',
        id: 'aadsfhbkhlk1241',
        title: 'Mitchell Casino',
        date: new Date(),
        location: 'Trinidad',
        country: 'germany',
        category: 'sportsbook',
        description: 'Roulette all day every day!'
      },
      {
        imageUrl: '/static/casinos/Yoyo.png',
        id: 'aadsfhbkhlk1241',
        title: 'Bet365',
        date: new Date(),
        location: 'Online',
        country: 'germany',
        category: 'casino',
        description: '250% Cash match on deposit, 10 free spins'
      },
      {
        imageUrl: '/static/casinos/Malina1.png',
        id: 'aadsfhbkhlk1241',
        title: 'Poker Stars',
        date: new Date(),
        location: 'Online',
        country: 'germany',
        category: 'casino',
        description: '$200 in chips on sign up!'
      }
    ],
    user: null,
    userdisplay: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setDisplayname (state, payload) {
      state.userdisplay = payload
      console.log('********* displayname set')
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    },
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')

      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const myuser = {
              name: payload.username,
              points: 100,
              level: 0,
              status: 'bronze',
              bio: 'nothing'
            }
            firebase.database().ref('/users/' + user.uid).set(myuser)
            // firebase.database().ref('/users/' + user.uid).child('/name/').push(payload.username)
            // firebase.database().ref('/users/' + user.uid).child('/points/').push(100)
            // firebase.database().ref('/users/' + user.uid).child('/level/').push(userlevel)
            // firebase.database().ref('/users/' + user.uid).child('/status/').push('bronze')
            // firebase.database().ref('/users/' + user.uid).child('/bio/').push('')

            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setDisplayname', payload.username)
            commit('setUser', newUser)
            commit('setLoading', false)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredMeetups: [],
        fbKeys: {}
      })
      firebase.database().ref('/users/' + payload.uid).once('value')
        .then(
          data => {
            const obj = data.val()
            const newUser = {
              id: payload.uid,
              displayname: obj.name,
              bio: obj.bio,
              level: obj.level,
              points: obj.points,
              registeredMeetups: []
            }
            commit('setDisplayname', obj.name)
            commit('setUser', newUser)
            commit('setLoading', false)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            console.log('**** user uid is: ' + user.uid)
            firebase.database().ref('/users/' + user.uid).once('value')
              .then(
                data => {
                  const obj = data.val()
                  console.log('** bio fetched is : ' + obj.bio)
                  console.log('** level fetched is : ' + obj.level)
                  console.log('** name fetched is : ' + obj.name)
                  console.log('** points fetched is : ' + obj.points)

                  console.log(name)
                  const newUser = {
                    id: user.uid,
                    displayname: obj.name,
                    bio: obj.bio,
                    level: obj.level,
                    points: obj.points,
                    registeredMeetups: []
                  }
                  commit('setDisplayname', obj.name)
                  commit('setUser', newUser)
                  commit('setLoading', false)
                }
              )
              .catch(
                error => {
                  commit('setLoading', false)
                  commit('setError', error)
                  console.log(error)
                }
              )
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    loadedOffers (state) {
      return state.loadedOffers.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedVideos (state) {
      return state.loadedVideos.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedPosts (state) {
      return state.loadedPosts.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedTrends (state) {
      return state.loadedTrending.sort((meetupA, meetupB) => {
        return meetupA.dat > meetupB.date
      })
    },
    loadedVlogs (state) {
      return state.loadedVlogs.sort((meetupA, meetupB) => {
        return meetupA.dat > meetupB.date
      })
    },
    loadedPrizes (state) {
      return state.loadedPrizes.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedBabes (state) {
      return state.loadedBabes.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedStreamers (state) {
      return state.loadedStreamers.sort((streamerA, streamerB) => {
        return streamerA.date > streamerB.date
      })
    },
    loadedAccas (state) {
      return state.loadedAccas.sort((streamerA, streamerB) => {
        return streamerA.date > streamerB.date
      })
    },
    loadedReviews (state) {
      return state.loadedReviews.sort((streamerA, streamerB) => {
        return streamerA.date > streamerB.date
      })
    },
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    streamBanners (state) {
      return state.streamBanners.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    loadedArticle (state) {
      return (meetupId) => {
        return state.loadedPosts.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    userdisplayname (state) {
      return state.userdisplay
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
