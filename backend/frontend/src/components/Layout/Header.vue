<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      width="250"
      class="blue-grey darken-4"
      dark
      persistent
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-app-bar
        flat
        class="transparent"
        dense
      >
        <v-list
          class="pa-0"
          :class="{'list-border-bottom' : miniVariant}"
        >
          <v-list-item>
            <v-list-item-action v-if="!miniVariant">
              <v-icon
                large
                color="orange"
              >
                invert_colors
              </v-icon>
            </v-list-item-action>
            <v-list-item-content v-if="!miniVariant">
              <v-list-item-title>
                <h2 v-text="appName" />
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                @click.stop="miniVariant = !miniVariant"
              >
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" />
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-app-bar>
      <v-divider />

      <v-tooltip
        right
        :disabled="!miniVariant"
      >
        <v-app-bar
          slot="activator"
          flat
          class="transparent"
          dense
        >
          <v-list
            class="pa-0"
            :class="{'list-border-bottom' : miniVariant}"
          >
            <v-list-item
              to="/"
              exact
            >
              <v-list-item-action>
                <v-icon>home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-app-bar>
        <span>Project Overview</span>
      </v-tooltip>
      <v-divider />

      <v-list
        subheader
        :class="{'list-border-bottom' : miniVariant}"
      />
      <v-divider />

      <v-list subheader>
        <v-subheader>DEVELOP</v-subheader>
        <template v-for="item in developItems">
          <v-list-item
            :key="item.icon"
            slot="activator"
            :to="item.link"
            exact
          >
            <v-list-item-action>
              <v-icon v-html="item.icon" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <!--<v-divider></v-divider>-->
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      dense
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />

      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        text
        :to="item.link"
      >
        <v-icon
          left
          dark
        >
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-btn>
      <v-btn
        v-if="userIsAuthenticated"
        text
        @click="onLogout"
      >
        <v-icon
          left
          dark
        >
          exit_to_app
        </v-icon>Logout
      </v-btn>
      <v-list-item
        v-if="userIsAuthenticated"
        @click="onLogout"
      >
        <v-list-item-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-action>
        <v-list-item-content>Logout</v-list-item-content>
      </v-list-item>

      <v-menu>
        <v-btn
          v-if="userIsAuthenticated"
          slot="activator"
          icon
        >
          <v-avatar
            class="white"
            size="32"
          >
            <v-icon color="primary">
              person
            </v-icon>
          </v-avatar>
        </v-btn>
        <v-list
          class="pa-0"
          light
        >
          <v-list-item avatar>
            <v-list-item-avatar>
              <v-avatar
                class="primary"
                size="48px"
              >
                <v-icon dark>
                  person
                </v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Doe</v-list-item-title>
              <v-list-item-sub-title>Administrator</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />

          <v-list-item key="profile">
            <v-list-item-action>
              <v-icon>person</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>My Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />

          <v-list-item key="lock_open">
            <v-list-item-action>
              <v-icon>lock_open</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "VuebaseLayout",

  data() {
    return {
      appName: process.env.VUE_APP_APP_NAME,
      drawer: true,
      fixed: false,
      developItems: [
        {
          icon: "supervisor_account",
          title: "Authentification",
          link: ""
        },
        {
          icon: "storage",
          title: "Database",
          link: ""
        },
        {
          icon: "perm_media",
          title: "Storage",
          link: ""
        },
        {
          icon: "public",
          title: "Hosting",
          link: ""
        },
        {
          icon: "functions",
          title: "Functions",
          link: ""
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      tabs: null
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "face", title: "Sign up", link: "/signup" },
        { icon: "lock_open", title: "Sign in", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "person", title: "Profile", link: "/profile" },
          { icon: "map", title: "Map", link: "/map" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

