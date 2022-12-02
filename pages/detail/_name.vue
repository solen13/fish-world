<template>
  <v-main >
    <h1 v-if="detailItem" class="text-center my-6 "   style="color: #425466">{{detailItem['Species Name']}}</h1>

    <v-row v-if="Object.keys(detailItem).length ">
      <v-col md="6" sm="12" >

          <v-card flat tile min-width="350" max-width="650">
            <v-window v-model="index">

              <template v-if="detailItem['Image Gallery']">
                <v-window-item  v-for="(item,index) in detailItem['Image Gallery']"  :key="`card-${index}`"  >
                  <v-img lazy-src='https://media2.giphy.com/media/KG4PMQ0jyimywxNt8i/giphy.gif?cid=ecf05e471me2hkwvanlbho2egk821ek0502p9mav7o4oycoy&rid=giphy.gif&ct=g'
                         :src="item.src" width="100%" height="350" contain />
                </v-window-item >
              </template>

              <template v-else>
               <v-window-item  >
                 <v-img :src="detailItem['Species Illustration Photo']" width="100%" height="350" contain />
               </v-window-item>
             </template>

            </v-window>


            <v-card-actions class="justify-space-between">

              <v-btn text @click="prev" >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <v-item-group  v-model="index"  class="text-center"  mandatory  >
                <template v-if="detailItem['Image Gallery']">
                  <v-item  v-for="(n,index) in detailItem['Image Gallery'].length" :key="index"   v-slot="{ active, toggle }" >
                    <v-btn :input-value="active"  icon @click="toggle"   >
                      <v-icon>mdi-record</v-icon>
                    </v-btn>
                  </v-item>
                </template>
              </v-item-group>

              <v-btn  text  @click="next" >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>

            </v-card-actions>

          </v-card>

      </v-col>

      <v-col  md="6" sm="12">
         <div class="px-3">

          <div v-if=" detailItem.Biology ">
            <h1>Biology</h1>
            <div v-html="detailItem.Biology"> </div>
          </div>
          <hr>

          <div v-if=" detailItem.Color ">
            <h1>Color</h1>
            <div v-html="detailItem.Color"> </div>
          </div>
          <hr>

          <div v-if="detailItem.Taste">
            <h1>Taste</h1>
            <div v-html="detailItem.Taste"></div>
          </div>
          <hr>

         <div v-if="detailItem.Location">
           <h1>Location</h1>
           <div v-html="detailItem.Location"></div>
         </div>
          <hr>

          <div v-if="detailItem.Texture">
             <h1>Texture</h1>
             <div v-html="detailItem.Texture"></div>
          </div>
          <hr>

        </div>

      </v-col>

    </v-row>

    <fish-detail-skeleon v-else/>

  </v-main>
</template>

<script>
import fishDetailSkeleon from '../../components/skeletons/fish-detail-skeleon.vue'
 export default {
  components: { fishDetailSkeleon },
  name: "index",

  data(){
    return{
      length:1,
      index: 0,
      detailItem:[]
    }
  },

  created() {
    const fishName=this.$route.params.name
    this.$axios.get('https://www.fishwatch.gov/api/species/'+fishName).then(res=>{
     this.detailItem= res.data[0]
    })
  },

  methods:{
    next () {
      if(this.detailItem[['Image Gallery']] !==null){
        this.index = this.index + 1 === this.detailItem[['Image Gallery']].length
          ? 0
          : this.index + 1
      }


    },


    prev () {
      if(this.detailItem[['Image Gallery']] !==null){
        this.index = this.index - 1 < 0
          ? this.detailItem[['Image Gallery']].length - 1
          : this.index - 1
      }

    },

  },

}
</script>

<style scoped>
h1{
  color:#425466
}
</style>
