<template>
  <v-app >
    <nav-bar/>
    <Nuxt/>
  </v-app>
</template>

<script>
import NavBar from "../components/navBar/navBar";
export default {
  name: 'DefaultLayout',
  components: {NavBar},


}
</script>
