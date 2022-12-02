<template>
  <v-main>
    <v-row v-if="Object.keys(fishItem).length" class="mt-7">
        <v-col  v-for="item in fishItem">
          <fish-item-card :item="item"/>
        </v-col>
    </v-row>

    <v-row v-else>
      <v-col  cols="3" v-for="item in 4" :key="item">
        <v-skeleton-loader   height="300"type="card-avatar, article"/>
      </v-col>
    </v-row>

  </v-main>
</template>

<script>
import FishItemCard from "../components/fishCard/fishItemCard";

export default {
  name: 'IndexPage',
  data(){
    return{
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    }
  },
  components: {FishItemCard},

  computed:{
    fishItem(){
      return  this.$store.state.fishItems
    },
  },

  created() {
    this.$store.dispatch('fishItem')
  },

}
</script>

<style scoped>

</style>
