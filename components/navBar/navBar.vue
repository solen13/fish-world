
<template>
  <div >
    <v-app-bar color="deep-purple accent-4" dense dark >


      <v-btn @click="$router.push('/')" class="hidden-sm-and-up">Homes</v-btn>

      <v-toolbar-title class="hidden-sm-and-down white--text" @click="$router.push('/')" style="cursor: pointer">Fish World</v-toolbar-title>

      <v-spacer></v-spacer>

      <template>

          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="What state are you from?"
            solo-inverted
            clearable
            dense
            filled
            rounded
            solo
          ></v-autocomplete>
      </template>




      <v-btn icon @click="SearchBtn">
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: "navBar",
  data(){
    return{
    search:null,
      items: [],
      loading: false,
      select: null,
      states: ['elma','armut']
    }
  },

  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true

    setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)

    },
    SearchBtn(){
      this.$route.params.name=this.search
      this.$router.push('/detail/'+this.search)
    },
    fishs(){

      this.$store.state.fishItems.forEach(res=>{
         this.states=res['Species Name'];
        console.log(this.states)
      })

    }

  },

  created() {
  this.fishs()
  }


}
</script>

<style scoped>
.Search{
  background-color: #caced0;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #7a7979;
  outline: none;
  width: 200px;
}
</style>
