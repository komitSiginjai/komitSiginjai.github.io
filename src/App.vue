<template>
  <v-app>
				<v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            KOMIT'S
          </v-list-item-title>
          <v-list-item-subtitle>
            IT Community
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

						<v-list-item v-if="isBlog || isSearchWhatWedo">
							<v-text-field
									label="Search in This Blog"
									prepend-icon="mdi-magnify"
									v-model="pencarianString"
									@keyup.enter="cariWhatWeDo()"
							></v-text-field>
						</v-list-item>

						<v-divider></v-divider>

      <v-list
        dense
        nav
      >
       <v-list-item-group
								v-model="model"
							>
								<v-list-item
          link
										@click="goToHome(); $vuetify.goTo('#sec1', options);"
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

								<div v-if="!isBlog && !isSingleWhatWedo && !isSearchWhatWedo && !isAbout">
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
								</div>

								<v-list-item
          link
										@click="goToBlog()"
        >
          <v-list-item-icon>
            <v-icon>mdi-blogger</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
							</v-list-item-group>
      </v-list>

						<v-divider></v-divider>

						<v-list
							dense
							nav
						>
							<v-list-item
								link
								href="https://www.instagram.com/komitsiginjai/"
								target="_blank"
							>
								<v-list-item-icon>
									<v-icon>mdi-instagram</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>@komit.siginjai</v-list-item-title>
								</v-list-item-content>
							</v-list-item>

							<v-list-item
								link
							>
								<v-list-item-icon>
									<v-icon>mdi-facebook</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>@komit.siginjai</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
						</v-list>

						<v-divider></v-divider>

						<v-list
							dense
							nav
						>
							<v-list-item
								link
								@click="goToAbout()"
							>
								<v-list-item-icon>
									<v-icon>mdi-information-outline</v-icon>
								</v-list-item-icon>

								<v-list-item-content>
									<v-list-item-title>About</v-list-item-title>
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

						<v-toolbar-items>
							<v-btn
								text
								to="/"
							>
								KOMIT'S
							</v-btn>
							<template v-if="!isBlog && !isSingleWhatWedo && !isSearchWhatWedo && !isAbout">
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
							</template>
							<v-btn 
								text
								to="/blog"
							>
								Blog
							</v-btn>
							<v-btn 
								text
								to="/about"
							>
								About
							</v-btn>
						</v-toolbar-items>

      <v-spacer></v-spacer>

      <v-text-field
									label="Search in This Blog"
									prepend-icon="mdi-magnify"
									class="mt-5"
									v-if="isBlog || isSearchWhatWedo"
									v-model="pencarianString"
									@keyup.enter="cariWhatWeDo()"
						></v-text-field>
						
						<div v-else>
							<v-btn 
								class="mx-2" 
								fab dark small 
								color="primary"
								href="https://www.instagram.com/komitsiginjai/"
								target="_blank"
							>
								<v-icon dark>mdi-instagram</v-icon>
						</v-btn>

						<v-btn class="mx-2" fab dark small color="primary">
								<v-icon dark>mdi-facebook</v-icon>
						</v-btn>
						</div>

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
						<v-snackbar
							v-model="statusSnackbar.snackbar"
							top="top"
							:color="statusSnackbar.colorSnackbar"
					>
							{{ this.statusSnackbar.textSnackBar }}
							<v-btn
									color="white"
									text
									@click="closeSnackbar()"
							>
									Close
							</v-btn>
					</v-snackbar>

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
				model: 1,
				pencarianString: '',
				statusSnackbar: {
					snackbar: false,
					colorSnackbar: null,
					textSnackBar: ''
				},
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
		isBlog() {
			return (this.$route.path === '/blog')
		},
		isSingleWhatWedo() {
			return (this.$route.name === 'blog-event')
		},
		isSearchWhatWedo() {
			return (this.$route.name === 'blog-cari')
		},
		isAbout() {
			return (this.$route.path === '/about')
		},
		dataTersedia() {
			return this.pencarianString != null && this.pencarianString != ''
		}
	},

	methods: {
		goToHome() {
			this.$router.push('/')
		},
		goToBlog() {
			this.$router.push('/blog')
		},
		goToAbout() {
			this.$router.push('/about')
		},
		cariWhatWeDo() {
			if(!this.dataTersedia){
				this.statusSnackbar.snackbar = true
				this.statusSnackbar.colorSnackbar = 'error'
				this.statusSnackbar.textSnackBar = 'Masukkan Keywoard Pencarian !'
			} else {
				this.$router.push('/blog/cari/' + this.pencarianString)
				this.pencarianString = ''
			}
		},
		closeSnackbar() {
			this.statusSnackbar.snackbar = false
		},
	}

};
</script>
