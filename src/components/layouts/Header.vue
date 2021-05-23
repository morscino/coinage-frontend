 <template>
     <v-container>
 <v-app-bar
      app
      color="cyan"
      dark
      flat
      height = "80"
    >
      <div class="d-flex align-center ml-2">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </div>
      <h3 class="ml-2 "> <router-link to="/"> <span class="site-name">Coinage</span> </router-link></h3>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >        
      </v-btn>
    </v-app-bar>
    </v-container>
 </template><style scoped>
 .site-name{
   color: white;
 }
 </style>
 