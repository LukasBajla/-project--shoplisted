<template>
  <UserLogin v-if="state =='login'"/>
  <UserSignup v-else-if="state == 'signup'"/>
</template>

<script>
import UserLogin from '../components/UserLogin.vue';
import UserSignup from '../components/UserSignup.vue';

export default { 
  components: {UserLogin, UserSignup},
  props: ['state'],
  setup(props) {
    console.log(props.state)
  }
}
</script>

<style>

</style>