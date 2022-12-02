<template>
  <v-card flat>
    <v-toolbar color="teal" >

      <v-toolbar-title class="white--text" style="cursor: pointer" @click="$router.push('/')">Fish World</v-toolbar-title>

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
        label="Look for a fish you are curious about"
        dense
        filled
        rounded
        solo
        @click="fishnameGet"
      />

      <v-btn small fab @click="SearchBtn">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-toolbar>
  </v-card>

</template>

<script>

export default {
  name: "navBar",
  data(){
    return{
      loading: false,
      items: [],
      search: null,
      select: null,
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
          this.items = this.$store.state.fishNames.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },

      SearchBtn() {
        if(this.select!=null){
          this.$route.params.name =this.select
          this.$router.push('/detail/' + this.select)

        }
        else{
          alert('Null search')
        }

      },

      fishnameGet(){
        if(this.$store.state.fishNames.length===0){
          this.$store.commit('fishName')
        }
      }

    },


}
</script>

<style scoped>
</style>
