<template>
    <div class="betty_background">
        <v-container>
            <v-layout row mt-5 mb-5>
                <v-spacer></v-spacer>
                <v-flex xs12 sm8 md5 lg4 xl3>
                    <v-card class="auth_form_card">
                        <v-container>
                            <form @submit.prevent="onSignup">
                                <v-layout row mt-5>
                                    <v-spacer></v-spacer>
                                    <v-flex xs10 sm7>
                                        <v-text-field id="username"
                                                      class="auth_input"
                                                      name="usernme"
                                                      label="User name"
                                                      v-model="username"
                                                      required></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                <v-layout row mt-1>
                                    <v-spacer></v-spacer>
                                    <v-flex xs10 sm7>
                                        <v-text-field class="auth_input"
                                                      name="email"
                                                      label="Mail"
                                                      id="email"
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
                                                      name="password"
                                                      label="Password"
                                                      id="password"
                                                      v-model="password"
                                                      type="password"
                                                      required></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                <v-layout row mt-1>
                                    <v-spacer></v-spacer>
                                    <v-flex xs10 sm7>
                                        <v-text-field class="auth_input"
                                                      name="repeatPassword"
                                                      label="Repeat Password"
                                                      id="repeatPassword"
                                                      v-model="repeatPassword"
                                                      type="password"
                                                      :rules="[comparePasswords]"></v-text-field>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                                <v-layout row mt-2>
                                    <v-spacer></v-spacer>
                                    <v-flex xs8 class="text-xs-center">
                                        <div class="betty-primary-btn">
                                            <v-btn type="submit" class="auth_primary_btn"
                                                   :disabled="loading"
                                                   :loading="loading">
                                                Sign up
                                            </v-btn>
                                        </div>
                                    </v-flex>
                                    <v-spacer></v-spacer>
                                </v-layout>
                            </form>
                            <v-layout row mt-4>
                                <v-flex xs12 class="text-xs-center">
                                    <p class="auth_meta_text">Already have an account?</p>
                                </v-flex>
                            </v-layout>
                            <v-layout row class="mt-1 mb-4">
                                <v-spacer></v-spacer>
                                <v-flex xs8 class="text-xs-center">
                                    <v-btn to="/signin" outline class="auth_secondary_btn">
                                        Sign in
                                    </v-btn>
                                </v-flex>
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
        username: '',
        phoneNumber: '',
        password: '',
        repeatPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.repeatPassword ? 'Passwords do not match' : ''
      },
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
      onSignup () {
        this.$store.dispatch('signUserUp', {
          email: this.email,
          phoneNumber: this.phoneNumber,
          password: this.password,
          username: this.username
        })
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import '../../stylus/signinSignup.styl'
</style>
