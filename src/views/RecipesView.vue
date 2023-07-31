<template>
  <Navbar/>
  <h1>Recipes</h1>
    <router-view/>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: { Navbar },
}
</script>

<style>

</style>