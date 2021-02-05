<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          outlined
          color="teal lighten-3"
          dark
          v-on="on"
        >
          Add new project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Project</span>
        </v-card-title>
        <v-form
          ref="form"
          class="px-3"
        >
          <v-card-text>
            <v-text-field
              v-model="title"
              label="Title"
              prepend-icon="folder"
              :rules="inputRules"
            />
            <v-textarea
              v-model="content"
              label="Information"
              prepend-icon="edit"
              :rules="inputRules"
            />
            <v-col
              cols="12"
              lg="6"
            >
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-with="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="event"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                />
              </v-menu>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="green"
              text
              outlined
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: (vm) => ({
    dialog: false,
    title: "",
    content: "",
    due: null,
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${year}/${month}/${day}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>