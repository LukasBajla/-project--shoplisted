<template>
  <div class="home container">
    <FilterNav
      @changeFilter="currentFilter = $event"
      :currentFilter="currentFilter"
    />
    <div class="shop-list" v-if="shopItems.length">
      <div v-for="item in filteredItems" :key="item.id">
        <SingleItem
          :item="item"
          @handleDelete="handleDelete"
          @toggleBought="toggleBought"
        />
      </div>
    </div>
    <div v-else class="loading">
      <div class="loading-icon"></div>
      <p class="loading-text">Loading Data...</p>
    </div>
  </div>
  <!-- <button @click="debug">DEBUG</button> -->
</template>

<script>
import SingleItem from "../components/SingleItem.vue";
import FilterNav from "../components/FilterNav.vue";
import getShopItems from "../scripts/getShopItems";
import { computed, ref } from "vue";

export default {
  name: "HomeView",
  components: { SingleItem, FilterNav },
  setup() {
    const currentFilter = ref("all");

    // get shopping items from database
    const { shopItems, error, getItems } = getShopItems();
    getItems();

    const handleDelete = (id) => {
      shopItems.value = shopItems.value.filter((item) => {
        return item.id != id;
      });
    };
    const toggleBought = (id) => {
      let p = shopItems.value.find((item) => {
        return item.id === id;
      });
      p.bought = !p.bought;
    };

    // filter shown shopping items by 'bought', 'need' or 'all'
    const filteredItems = computed(() => {
      if (currentFilter.value === "bought") {
        return shopItems.value.filter((item) => {
          return item.bought;
        });
      }
      if (currentFilter.value === "need") {
        return shopItems.value.filter((item) => {
          return !item.bought;
        });
      }
      //return ALL
      return shopItems.value;
    });

    return {
      shopItems,
      currentFilter,
      handleDelete,
      toggleBought,
      filteredItems,
      error,
    };
  },
};
</script>

<style>
.shop-list {
  /* background-color: seagreen; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  /* grid-template-columns: 1fr 1fr; */
  column-gap: 2em;
  -moz-column-gap: 2em;
  -webkit-column-gap: 2em;
  row-gap: 0.5em;
  margin-top: 2em;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
.loading-icon {
  width: 50px;
  aspect-ratio: 1/1;
  border: solid 10px var(--clr-neutral-800);
  border-radius: 50%;
  position: relative;
  /* overflow: hidden; */
}

@keyframes loading-anim {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

.loading-icon:before {
  content: "";
  position: absolute;
  top: -6px;
  left: -6px;
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  border: 3px solid var(--clr-primary-400);
  border-radius: 50%;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  animation: loading-anim 1.5s ease-in-out infinite;
  z-index: 10;
}
</style>
