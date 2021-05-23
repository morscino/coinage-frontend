<template>
  <v-app>
   <Header/>

    <v-main class = "grey lighten-4">
      <v-container fluid>
         <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Header from './components/layouts/Header'

export default {
  name: 'App',
  components:{
    Header
  },

  data: () => ({
    //
  }),
};
</script>
<style>
a{
  text-decoration: none;
}
</style>
