<template>
    <Navbar/>
    <h1>Shopping List</h1>
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