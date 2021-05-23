import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCoins:[],
    allCoinsNow:[],
    Symbol:"My symbol",
    headers: [
      {
        text: 'Symbol',
        align: 'start',
        sortable: true,
        value: 'symbol',
      },
      { text: 'Ask Price', value: 'askPrice' },
      { text: 'Ask Quantity', value: 'askQty' },
      { text: 'Bid Price', value: 'bidPrice' },
      { text: 'Bid Quantity', value: 'bidQty' },
      { text: 'High Price', value: 'highPrice' },
      { text: 'Low Price', value: 'lowPrice' },
      { text: 'Open Price', value: 'openPrice' },
      { text: 'Last Price', value: 'lastPrice' },
    ],
  },
  mutations: {
    getAllCoins: state => {
      axios.get('https://api.binance.com/api/v3/ticker/24hr').then((response)=>{
          state.allCoinsNow =  response.data; 

         state.allCoinsNow.map((coin)=>{
            coin.linkto = coin.symbol.toLowerCase();
         })

          state.allCoins = state.allCoins.concat(state.allCoinsNow);
          
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  actions: { 
    getAllCoins : context => {
      context.commit('getAllCoins');
    }
  },
  getters:{
    singleCoin: state=> (symbol) =>{

      var singleCoin = state.allCoins.filter(e => {
          return e.symbol == symbol;
      })

      return singleCoin.reverse();
    }
  },
  modules: {
  }
})
