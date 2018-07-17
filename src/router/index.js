import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import Articles from '@/components/Articles/Articles'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signupfb from '@/components/User/Signupfb'
import Signupgl from '@/components/User/Signupgl'
import Signuptw from '@/components/User/Signuptw'
import Signupmobile from '@/components/User/Signupmobile'
import Signin from '@/components/User/Signin'
import Meetup from '@/components/Meetup/Meetup'
import Article from '@/components/Articles/Article'
import Bonus from '@/components/Bonus'
import Acca from '@/components/Acca'
import Club from '@/components/Club'
import Giveaways from '@/components/Giveaways'
import Reviews from '@/components/Reviews'
import Vlogs from '@/components/Vlogs'
import Babes from '@/components/Babes'
import About from '@/components/About'
import Streamers from '@/components/Streamers'
import Work from '@/components/Work'
import Powerhours from '@/components/Powerhours'
import Schedules from '@/components/Schedules'
import News from '@/components/News'
import AuthGaurd from './auth-gaurd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups,
      beforeEnter: AuthGaurd
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles,
      beforeEnter: AuthGaurd
    },
    {
      path: '/bonus',
      name: 'Bonus',
      component: Bonus,
      beforeEnter: AuthGaurd
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews,
      beforeEnter: AuthGaurd
    },
    {
      path: '/club',
      name: 'Club',
      component: Club,
      beforeEnter: AuthGaurd
    },
    {
      path: '/vlogs',
      name: 'Vlogs',
      component: Vlogs,
      beforeEnter: AuthGaurd
    },
    {
      path: '/acca',
      name: 'Acca',
      component: Acca,
      beforeEnter: AuthGaurd
    },
    {
      path: '/babes',
      name: 'Babes',
      component: Babes,
      beforeEnter: AuthGaurd
    },
    {
      path: '/giveaways',
      name: 'Giveaways',
      component: Giveaways,
      beforeEnter: AuthGaurd
    },
    {
      path: '/powerhours',
      name: 'Powerhours',
      component: Powerhours,
      beforeEnter: AuthGaurd
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
      beforeEnter: AuthGaurd
    },
    {
      path: '/schedules',
      name: 'Schedules',
      component: Schedules,
      beforeEnter: AuthGaurd
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: AuthGaurd
    },
    {
      path: '/streamers',
      name: 'Streamers',
      component: Streamers,
      beforeEnter: AuthGaurd
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/articles/:id',
      name: 'Article',
      props: true,
      component: Article,
      beforeEnter: AuthGaurd
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGaurd
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signupfb',
      name: 'Signupfb',
      component: Signupfb
    },
    {
      path: '/signupgl',
      name: 'Signupgl',
      component: Signupgl
    },
    {
      path: '/signupmobile',
      name: 'Signupmobile',
      component: Signupmobile
    },
    {
      path: '/signuptw',
      name: 'Signupmtw',
      component: Signuptw
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
