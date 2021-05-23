<template>
    
        <v-card>
            <v-card-title>
            <v-btn color="white" depressed router-link to = "/">   
                <v-icon primary left>
                    mdi-arrow-left
                </v-icon>  
            </v-btn> 
            <span class="ml-3">{{Symbol}}</span> 
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
            :items="singleCoin"
            :search="search"
            :items-per-page="50"
            :footer-props="{
                'items-per-page-options': [20, 30, 40, 50,100]
            }"
            ></v-data-table>
        </v-card>
   
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        Symbol:'',
      }
    },
    computed:{
     
      singleCoin(){
          return this.$store.getters.singleCoin(this.Symbol.toUpperCase());
      },
     
      headers(){
        return this.$store.state.headers;
      }

    }, 
    created(){
         this.Symbol = this.$route.params.symbol.toUpperCase();
    }
  }
</script>