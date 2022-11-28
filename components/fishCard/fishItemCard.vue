<template>
   <v-main>
      <v-card  >
          <div v-if="item['Species Illustration Photo']">
            <nuxt-img :src="item['Species Illustration Photo'].src"  width="300"  height="169" />
            <h1 class="text-center mt-2 " style="font-size: 16px">{{item['Species Name']}}</h1>
            <v-btn @click="btn">view</v-btn>

          </div>
      </v-card>



   </v-main>
</template>

<script>
export default {
  name: "fishItemCard",



  props: {
    item: {
      type: Object,
      default: Object
    }
  },


  methods: {
    btn() {
      let items = this.item['Species Name']
      this.$router.push('/detail/' + items)
    },

  },

}
</script>


