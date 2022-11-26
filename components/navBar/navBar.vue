<template>
  <v-main>
    <v-btn @click="$router.push('/')">home</v-btn>

  </v-main>
</template>

<script>
import multiSplite from "multi-split";
export default {
  name: "navBar",
  methods:{
    tukish(){
      const resulat=multiSplite(this.$store.state.detail.Color,['<p>','</p>'])
      const resulat1=multiSplite(this.$store.state.detail.Location,['<ul>','</ul>','<li>','</li>'])
      const Texture=multiSplite(this.$store.state.detail.Texture,['<p>','</p>'])
      console.log(resulat1)

      this.$axios.get(`https://api.mymemory.translated.net/get?q=${resulat1}&langpair=en|tr`).then(res=>{
       console.log(res.data.responseData.translatedText)

      })
    }
  }
}
</script>

<style scoped>

</style>
