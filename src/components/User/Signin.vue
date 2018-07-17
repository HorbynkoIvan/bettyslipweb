<template>
    <div class="betty_background">
        <v-container>
            <v-layout row mt-5 mb-5>
                <v-spacer></v-spacer>
                <v-flex xs12 sm8 md5 lg4 xl3>
                    <v-card class="auth_form_card">
                        <v-container>
                            <form @submit.prevent="onSignin">
                                <v-layout row mt-5>
                                    <v-spacer></v-spacer>
                                    <v-flex xs10 sm7>
                                        <v-text-field class="auth_input" id="email"
                                                      name="email"
                                                      label="Mail"
                                                      v-model="email"
                                                      type="email"
                                                      required></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                <v-layout row mt-1>
                                    <v-spacer></v-spacer>
                                    <v-flex xs10 sm7>
                                        <v-text-field class="auth_input"
                                                      id="password"
                                                      name="password"
                                                      label="Password"
                                                      v-model="password"
                                                      type="password"
                                                      required></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                <v-layout row>
                                    <v-spacer></v-spacer>
                                    <v-flex xs10 sm7>
                                        <a href="#">
                                            <p class="text-xs-right auth_meta_text">Forgot your password?</p>
                                        </a>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                <v-layout row mt-2>
                                    <v-spacer></v-spacer>
                                    <v-flex xs8 class="text-xs-center">
                                        <v-btn type="submit" class="auth_primary_btn"
                                               :disabled="loading"
                                               :loading="loading">
                                            Sign in
                                        </v-btn>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                            </form>
                            <v-layout row mt-4>
                                <v-flex xs12 class="text-xs-center">
                                    <p class="auth_meta_text">Don’t have an account?</p>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-spacer></v-spacer>
                                <v-flex xs8 class="text-xs-center">
                                    <v-btn to="/signup" outline class="auth_secondary_btn">
                                        Sign up
                                    </v-btn>
                                </v-flex>
                                <v-spacer></v-spacer>
                            </v-layout>
                            <v-layout row mt-4>
                                <v-flex xs12 class="text-xs-center">
                                    <p class="auth_meta_text">Connect with:</p>
                                </v-flex>
                            </v-layout>
                            <v-layout row mt-1 mb-4>
                                <v-spacer></v-spacer>
                                <div class="auth_container_icon_socnet">
                                    <a href="#"><img src="/static/auth/facebook-logo.png"></a>
                                    <a href="#"><img src="/static/auth/vk-social-logotype.png"></a>
                                    <a href="#"><img src="/static/auth/google-plus-social-logotype.png"></a>
                                    <a href="#"><img src="/static/auth/twitter-logo.png"></a>
                                </div>
                                <v-spacer></v-spacer>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
                <v-spacer></v-spacer>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

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

<style lang="stylus" scoped>
    @import '../../stylus/signinSignup.styl'
    .auth_container_icon_socnet
        width 187px
        height auto

    .auth_container_icon_socnet a
        margin 6px
        display inline-block
</style>
