export default {

  fishItem({commit}){
     this.$axios.get('https://www.fishwatch.gov/api/species').then(res=>{
       commit('fishItemMutations', res.data)
      })

  },
  getFish({commit},fishName){
    console.log(fishName)

  }





}
