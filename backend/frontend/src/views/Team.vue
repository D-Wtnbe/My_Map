<template>
  <div class="team">
    <h1 class="subheading grey--text">
      Team
    </h1>
    <v-container>
      <v-layout
        row
        wrap
      >
        <v-flex
          sm6
          xs12
          md6
          lg3
        >
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar
                tile
                class="mt-n7"
              >
                <v-sheet
                  color="green"
                  width="80"
                  height="80"
                  elevation="10"
                >
                  <v-icon
                    dark
                    large
                  >
                    store
                  </v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">
                  Article
                </div>
                <v-list-item-title class="headline mb-1 text-right">
                  523614
                </v-list-item-title>
                <div>
                  <v-divider />
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon
                text
                class="ma-2"
              >
                person
              </v-icon>
              <div class="overline">
                langrenn
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
          sm6
          xs12
          md6
          lg3
        >
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar
                tile
                class="mt-n7"
              >
                <v-sheet
                  color="#F44336"
                  width="80"
                  height="80"
                  elevation="10"
                >
                  <v-icon
                    dark
                    large
                  >
                    subscriptions
                  </v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">
                  Abonné
                </div>
                <v-list-item-title class="headline mb-1 text-right">
                  +700
                </v-list-item-title>
                <div>
                  <v-divider />
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon
                text
                class="ma-2"
              >
                subscriptions
              </v-icon>
              <div class="overline">
                Ak Byte
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
          sm6
          xs12
          md6
          lg3
        >
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar
                tile
                class="mt-n7"
              >
                <v-sheet
                  color="#03A9F4"
                  width="80"
                  height="80"
                  elevation="10"
                >
                  <v-icon
                    dark
                    large
                  >
                    add_shopping_cart
                  </v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">
                  Shopping
                </div>
                <v-list-item-title class="headline mb-1 text-right">
                  $34,245
                </v-list-item-title>
                <div>
                  <v-divider />
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon
                text
                class="ma-2"
              >
                credit_card
              </v-icon>
              <div class="overline">
                VISA Card
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
          sm6
          xs12
          md6
          lg3
        >
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar
                tile
                class="mt-n7"
              >
                <v-sheet
                  color="#FFC107"
                  width="80"
                  height="80"
                  elevation="10"
                >
                  <v-icon
                    dark
                    large
                  >
                    folder_shared
                  </v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="overline text-right">
                  Folder shared
                </div>
                <v-list-item-title class="headline mb-1 text-right">
                  1730
                </v-list-item-title>
                <div>
                  <v-divider />
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon
                text
                class="ma-2"
              >
                folder
              </v-icon>
              <div class="overline">
                Prodect
              </div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
          v-for="person in team"
          :key="person.name"
          xs12
          sm6
          md4
          lg3
        >
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar
                size="100"
                class="red lighten-2"
              >
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                outlined
                color="orange"
              >
                <v-icon
                  small
                  left
                >
                  message
                </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Team",
  components: {},
  data: () => ({
    team: [
      { name: "Mark", role: "web developer", avatar: "/img1.png" },
      { name: "Daniyar", role: "Graphic designer", avatar: "/img2.png" },
      { name: "Serik", role: "web developer", avatar: "/img3.png" },
      { name: "langrenn", role: "Desktop developer", avatar: "/img4.png" },
    ]
  })
};
</script>