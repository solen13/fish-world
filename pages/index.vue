<template>
<v-main>
  <v-row>
    <v-col  v-for="item in fishItem">
      <fish-item-card   :item="item"/>
    </v-col>
  </v-row>
</v-main>
</template>

<script>
import FishItemCard from "../components/fishCard/fishItemCard";
export default {
  name: 'IndexPage',
  components: {FishItemCard},
  computed:{
    fishItem(){
      return  this.$store.state.fishItems
    },
  },
  created() {
    this.$store.dispatch('fishItem')
  }
}
</script>
