<template>
  <div class="usernav">
    <div class="container">
      <h2 class="project-title">
        <router-link :to="{ name: 'Home' }"> shoplisted </router-link>
      </h2>
      <div v-if="!user" class="usernav-access">
        <router-link
          class="main-nav__link"
          :to="{ name: 'User', params: { state: 'login' } }"
        >
          LOGIN
        </router-link>
        <router-link
          class="main-nav__link"
          :to="{ name: 'User', params: { state: 'signup' } }"
        >
          SIGNUP
        </router-link>
      </div>
      <div class="usernav-info" v-else>
        <p>{{ user.displayName }}</p>
        <i class="fa-solid fa-user"></i>
        <button @click="handleLogout" class="btn-secondary">LOGOUT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import getUser from '../scripts/getUser'
import userLogout from '../scripts/userLogout'

export default {

  setup() {
    const {user} = getUser()
    const {logout, error} = userLogout()
    const router = useRouter()

    const handleLogout = async () => {
      await logout()
      if(!error.value) {
        router.push({name: 'Home'})
      }
    }

    return {user, error, handleLogout}
}

};
</script>

<style>
.usernav {
  background-color: var(--clr-neutral-600);
  box-shadow: 0px 0px 10px 0px var(--clr-neutral-800);
  padding: 1.2em 0;
  position: relative;
  z-index: 999;
}
.usernav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.usernav-access,
.usernav-info {
  display: flex;
  align-items: center;
  gap: 1em;
}

.usernav-info {
  color: var(--clr-neutral-300);
  font-size: var(--fs-450);
}

.usernav a {
  border: none;
  font-weight: var(--fw-bold);
  color: var(--clr-neutral-300);
  transition: opacity 0.25s ease-in-out;
  text-transform: uppercase;
  opacity: 0.5;
}
.usernav a:hover {
  border: none;
  opacity: 1;
}
.project-title a {
  color: var(--clr-neutral-500);
  opacity: 1;
  transition: color .25s ease-in-out;
}
.project-title a:hover {
  color: var(--clr-primary-400);
}
</style>
