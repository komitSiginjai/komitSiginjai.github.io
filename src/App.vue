<template>
  <v-app>
				<v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            KOMIT'S
          </v-list-item-title>
          <v-list-item-subtitle>
            IT Community
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          link
										@click="$vuetify.goTo('#sec1', options)"
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

								<v-list-item
          link
										@click="$vuetify.goTo('#sec3', options)"
        >
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Activity</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

								<v-list-item
          link
										@click="$vuetify.goTo('#sec4', options)"
        >
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->
						<template v-if="$vuetify.breakpoint.mdAndUp">
							<div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
										@click="drawer = !drawer"
        />
							</div>
						<v-toolbar-title>KOMIT'S</v-toolbar-title>

						<v-toolbar-items>
							<v-btn text
								@click="$vuetify.goTo('#sec1', options)"
							>
								Home
							</v-btn>
							<v-btn 
								text
								@click="$vuetify.goTo('#sec3', options)"
							>Activity</v-btn>
							<v-btn 
								text
								@click="$vuetify.goTo('#sec4', options)"
							>Gallery</v-btn>
						</v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
						</template>

						<template v-else-if="$vuetify.breakpoint.smAndDown">
							<div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
							</div>
							<v-toolbar-title>KOMIT'S</v-toolbar-title>

							<v-spacer></v-spacer>

       <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: function () {
			return {
				drawer: false,
			}
		},

	computed: {
		options () {
			return {
				duration: 600,
				offset: 0,
				easing: 'easeInOutCubic',
			}
		},
	}

};
</script>
