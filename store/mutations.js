export  default {

  fishItemMutations(state,payload){
    state.fishItems=payload
  },

  fishName(state){
    state.fishItems.forEach(el=>{
      state.fishNames.push(el['Species Name'])
    })

  }

}
