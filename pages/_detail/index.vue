<template>
  <v-main >

    <h1 v-if="detailItem" class="text-center mb-16 "   style="color: #425466">{{detailItem['Species Name']}}</h1>

    <v-row v-if="detailItem">
      <v-col md="6" sm="12" >

          <v-card flat tile min-width="350" max-width="650">
            <v-window v-model="index">

              <template v-if="detailItem['Image Gallery']">
                <v-window-item  v-for="n in detailItem['Image Gallery']"  :key="`card-${n}`"  >
                  <v-img :src="n.src" width="100%" height="350" contain ></v-img>
                </v-window-item>
              </template>

             <template v-else>
               <v-window-item  >
                 <v-img :src="detailItem['Species Illustration Photo']" width="100%" height="350" contain ></v-img>
               </v-window-item>
             </template>

            </v-window>

            <v-card-actions class="justify-space-between">

              <v-btn text @click="prev" >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

              <v-item-group  v-model="index"  class="text-center"  mandatory  >
                <template v-if="this.$store.state.detail['Image Gallery'] !==null">

                  <v-item  v-for="(n,index) in this.$store.state.detail['Image Gallery'].length" :key="index"   v-slot="{ active, toggle }" >
                    <v-btn :input-value="active"  icon @click="toggle"   >
                      <v-icon>mdi-record</v-icon>
                    </v-btn>
                  </v-item>

                </template>
              </v-item-group>

              <v-btn  text  @click="next"   >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>

            </v-card-actions>

          </v-card>

      </v-col>

      <v-col  md="6" sm="12">
        <div class="px-3">



          <div v-if="detailItem && detailItem.Color ">
            <h1>Color</h1>
            <div v-html="detailItem.Color"> </div>
          </div>
          <hr>

          <div v-if="detailItem && detailItem.Taste">
            <h1>Taste</h1>
            <div v-html="detailItem.Taste"></div>
          </div>
          <hr>

         <div v-if="detailItem && detailItem.Location">
           <h1>Location</h1>
           <div v-html="detailItem.Location"></div>
         </div>
          <hr>

          <div v-if="detailItem && detailItem.Texture">
             <h1>Texture</h1>
             <div v-html="detailItem.Texture"></div>
          </div>
          <hr>

        </div>

      </v-col>

    </v-row>

  </v-main>
</template>

<script>
import multiSplite from "multi-split";

export default {
  name: "index",
  data(){
    return{
      length:1,
      index: 0,
      detailItem:[]
    }
  },
  computed:{


  },
  mounted() {
    this.$axios.get('https://www.fishwatch.gov/api/species/'+fishName).then(res=>{

     this.detailItem= res.data
    })
  },
  methods:{
    next () {
   /*   this.index = this.index + 1 === this.length
        ? 0
        : this.index + 1*/
    },
    prev () {
      /*
      this.index = this.index - 1 < 0
        ? this.length - 1
        : this.index - 1 */
    },


  },


}
</script>

<style scoped>
h1{
  color:#425466
}
</style>
