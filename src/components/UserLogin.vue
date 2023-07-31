<template>
  <div class="user-access">
    <form @submit.prevent="handleSubmit">
      <h1>LOGIN</h1>
      <label>
        Email
        <input type="email" required v-model="email"/>
      </label>
      <label>
        Password
        <input type="password" required v-model="password"/>
      </label>
      <div v-if="error" class="error">{{ error }}</div>
      <button class="btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import userLogin from '../scripts/userLogin.js'
import { useRouter } from "vue-router";


export default {
  setup() {
    const email = ref('')
    const password = ref("");
    const router = useRouter()

    const {error, login} = userLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if(!error.value) {
        router.push({name: 'Home'})
      }

    }

    return {email, password, error, handleSubmit}
  }
};
</script>

<style></style>
