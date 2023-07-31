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
  }
}
</script>

<style>
  .user-access {
    display: grid;
    place-items: center;
    margin-top: 2em;
  }
 .user-access form {
  display: flex;
  flex-direction: column;
  gap: 1em;
 }
 .user-access label {
  display: grid;
  gap: .6em;
  font-size: var(--fs-300);
  text-transform: uppercase;
 }
 .user-access input {
  font-size: var(--fs-450);
 }
 .user-access button {
  margin-top: 1em;
  padding: 1.5em 1em;
 }
</style>