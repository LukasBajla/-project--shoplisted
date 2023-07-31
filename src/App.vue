<template>
  <Userbar/>
  <div class="project">
    <router-view />
  </div>
</template>

<script>
import Userbar from './components/Userbar.vue'

export default {
  components: { Userbar},
};
</script>

<style>
.project {
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  position: relative;
  /* background-color: pink; */
}
.project h1{
  margin-bottom: 1em;
}
</style>
