<template>
 <div class="errors">
   <p>The Page Cannot <br> Be Reached</p>
    <p>404</p>
   <p>ERROR</p>

   <v-btn @click="$router.push('/')">Home</v-btn>
 </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>
.errors{
  width: 100%;
  height: 100%;
  background-color: #425466;
 display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
p{
  font-size: 32px;
  color: white;
  text-align: center;
}

</style>
