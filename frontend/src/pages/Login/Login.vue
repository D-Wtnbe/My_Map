<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Map For You</p>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center">
          <v-row no-gutters>
            <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
              <div class="login-wrapper">
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`">
                    LOGIN
                  </v-tab>
                  <v-tab :href="`#tab-newUser`">
                    New User
                  </v-tab>

                  <v-tab-item :value="'tab-login'" >
                    <v-form>
                      <v-container>
                        <form @submit.prevent="onSignin">
                        <v-row class="flex-column">
                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium my-10">Good Morning, User</p>
                            <v-btn height="45" block color="white" elevation="0" class="google text-capitalize" @click.prevent="onSigninGoogle">
                              <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                              Sign in with Google</v-btn>
                          </v-col>
                          <v-col cols="12" class="d-flex align-center my-8">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-form>
                            <v-col>
                              <v-text-field
                                  v-model="email"
                                  :rules="emailRules"
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="password"
                                  :rules="passRules"
                                  type="password"
                                  label="Password"
                                  hint="At least 6 characters"
                                  required
                              ></v-text-field>

                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  class="text-capitalize"
                                  large
                                  :disabled="password.length === 0 || email.length === 0"
                                  color="primary"
                                  @click="onSignin"
                              >
                                Login</v-btn>
                              <v-btn large text class="text-capitalize primary--text">Forget Password</v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                        </form>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                  <v-tab-item :value="'tab-newUser'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">

                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium mt-10">Welcome!</p>
                            <p class="login-slogan display-1 text-center font-weight-medium mb-10">Create your account</p>
                          </v-col>

                          <v-form>
                            <v-col>
                              <v-text-field
                                  id="name"
                                  v-model="createFullName"
                                  label="Full Name"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  id="email"
                                  v-model="createEmail"
                                  :rules="emailRules"
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  id="password"
                                  v-model="createPassword"
                                  :rules="passRules"
                                  type="password"
                                  label="Password"
                                  hint="At least 6 characters"
                                  required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  large
                                  block
                                  :disabled="createFullName.length === 0 || createEmail.length === 0 || createPassword === 0"
                                  color="primary"
                                  @click="onSignup"
                              >
                                Create your account</v-btn>
                            </v-col>
                          </v-form>

                          <v-col cols="12" class="d-flex align-center my-4">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>

                          <v-btn height="45" block color="white" elevation="0" class="google text-capitalize" @click.prevent="onSigninGoogle">
                            <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                            Sign in with Google</v-btn>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                </v-tabs>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">© 2020 Map For your, LLC. All rights reserved.</div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        createFullName: '',
        createEmail: '',
        createPassword: '',
        password: '',
        passRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Min 6 characters'
        ]
      }
    },
    computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/dashboard");
      }
    }
  },
    methods: {
    onSignin() {
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.createEmail,
        password: this.createPassword
      });
    },
    onSigninGoogle() {
      this.$store.dispatch("signUserInGoogle");
    },
    onSigninFacebook() {
      this.$store.dispatch("signUserInFacebook");
    },
    onSigninGithub() {
      this.$store.dispatch("signUserInGithub");
    },
    onSigninTwitter() {
      this.$store.dispatch("signUserInTwitter");
    },
    onResetPassword() {
      if (this.email === "") {
        return this.$store.dispatch("setError", {
          message: "Email can not be blank"
        });
      }
      this.$store.dispatch("resetPasswordWithEmail", { email: this.email });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
    }
  }




</script>

<style src="./Login.scss" lang="scss"/>
