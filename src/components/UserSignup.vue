<template>
  <div class="user-access">
    <form @submit.prevent="handleSubmit">
      <h1>SIGNUP</h1>
      <label>
        Username
        <input type="text" required v-model="username" />
      </label>
      <label>
        Email
        <input type="email" required v-model="email" />
      </label>
      <label>
        Password [at least 6 characters long]
        <input type="password" required v-model="password" />
      </label>
      <div v-if="error" class="error">{{ error }}</div>
      <button class="btn-primary">Create an account!</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import userSignup from "../scripts/userSignup";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const username = ref("");
    const { error, signup } = userSignup();
    const router = useRouter()

    const handleSubmit = async () => {
      await signup(email.value, password.value, username.value);
      if(!error.value) {
        router.push({name: 'Home'})
      }
    };

    // const {error, signup} = userSignup(email.value, password.value, username.value)

    return { email, password, username, handleSubmit, error };
  },
};
</script>

<style></style>
