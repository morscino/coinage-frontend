<template>

  <v-card class="my-5">
    <v-card-title>
      All Coins
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="allCoins"
      :items-per-page="50"
      :footer-props="{
        'items-per-page-options': [20, 30, 40, 50,100]
      }"
      :search="search">

        <template v-slot:[`item.symbol`]="{ item }">
          <router-link :to="item.linkto">
            {{ item.symbol }}
          </router-link>
        </template>
    </v-data-table>
  </v-card>
  
</template>

<script>
//import axios from 'axios'
  export default {
    name:'AllCoins',
    data () {
      return {
        search: '',
      }
    },
    methods:{
       getAllcoins(){
         //Dispatch get all coins action
          this.$store.dispatch('getAllCoins');
          console.log('30s don reach');
      }

    },
    computed:{
      allCoins(){
        return this.$store.state.allCoinsNow;
      },
      headers(){
        return this.$store.state.headers;
      }

    },
    created(){
      //Get all coins on load 
      this.getAllcoins();
    
      //Get all coins every 30s
      setInterval(()=>{
         this.getAllcoins();
        
      },30000)

    }
  }
</script>

<style scoped>

</style>