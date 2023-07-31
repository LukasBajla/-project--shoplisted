<template>
  <div class="shop-item" :class="{ bought: item.bought == true }">
    <div class="shop-item__header">
      <h2 @click="showItemDesc = !showItemDesc">{{ item.title }}</h2>
      <div class="shop-item__icons">
        <i @click="toggleBought" class="fa-solid fa-check"></i>
      </div>
    </div>
    <div v-show="showItemDesc" class="shop-item__details">
      <div class="shop-item__details-tags">
        <div v-for="tag in item.tags" :key="tag">
          <p>{{ tag }}</p>
        </div>
      </div>
      <div class="shop-item__icons"> 
        <router-link :to="{ name: 'EditItem', params: { id: item.id } }">
          <i class="fa-solid fa-pencil"></i>
        </router-link>
        <i @click="deleteItem" class="fa-solid fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '@/firebase/config';

export default {
  props: ["item"],
  setup(props, context) {
    const showItemDesc = ref(false)
    
    const deleteItem = async () => {
        await db.collection("shopItems").doc(props.item.id).delete()
        context.emit('handleDelete' , props.item.id)
    };
    const toggleBought = async () => {
      await db.collection("shopItems").doc(props.item.id).update("bought", !props.item.bought)
      context.emit("toggleBought", props.item.id)
    };

    return {showItemDesc, deleteItem, toggleBought}
  }
};
</script>

<style>
.shop-item {
  /* background-color: blue; */
  background-color: var(--clr-neutral-700);
  padding: 1em 1.5em;
  border-radius: var(--border-radius);
  /* border-left: 5px solid var(--clr-secondary-400); */
  position: relative;
  overflow: hidden;
}
.shop-item ::after {
  width: 5px;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--clr-wrong-400);
}
.shop-item.bought ::after {
  background-color: var(--clr-correct-400);
}

.shop-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shop-item__header h2 {
  cursor: pointer;
}
.shop-item__details {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr auto;
}
.shop-item__details p {
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);
  background-color: var(--clr-neutral-750);
  padding: 0.5em 1em;
  border-radius: 16px;
}
.shop-item__details-tags{
  gap: 0.3em;
  display: flex;
}
.shop-item__icons {
  display: flex;
  /* background-color: gold; */
  align-items: center;
  gap: 1.2em;
  font-size: 1em;
}

.shop-item .fa-solid  {
  color: var(--clr-neutral-200);
  opacity: .2;
  transition: opacity 0.25s ease-in-out;
}
.shop-item .fa-check {
  color: var(--clr-neutral-600);
  opacity: 1;
  font-size: 1.8em;
  font-weight: var(--fw-black);

}

.shop-item .fa-solid:hover {
  cursor: pointer;
  opacity: 1;
}

.shop-item.bought .fa-check {
  color: var(--clr-correct-400);
  opacity: 1;
}
</style>
