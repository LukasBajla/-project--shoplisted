<template>
  <nav class="main-nav">

    <div class="main-nav__item main-nav__item-home">
      <router-link class="main-nav__link" :to="{ name: 'ShoplistHome' }">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
    </div>

    <div class="main-nav__item main-nav__item-additem">
      <router-link class="main-nav__link" :to="{ name: 'Recipes' }">
        <i class="fa-solid fa-utensils"></i>
      </router-link>
    </div>

  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  /* margin-bottom: 5em; */
  /* margin-top: 10em; */
}
nav i {
  font-size: 2em;
  padding: .5em;
  transition: color 0.25s ease-in-out;
  transition: border 0.1s ease-in-out;
}
nav a {
  display: block;
  padding: 0.5em;
  /* background-color: pink; */
  color: white;
  transition: color 0.25s ease-in-out,
  border 0.25s ease-in-out;
  border: 3px solid var(--clr-neutral-700);
  border-radius: var(--border-radius);
}
nav a:hover {
  border: 3px solid var(--clr-neutral-300);
}

nav a.router-link-active {
  /* color: var(--clr-primary-400); */
  border: 3px solid var(--clr-primary-400);
  color: var(--clr-primary-400);
}
nav a.router-link-active:hover {
  border: 3px solid var(--clr-primary-800);
  color: var(--clr-primary-800);
}
</style>
