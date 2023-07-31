<template>
  <div v-if="error">{{ error }}</div>

  <div v-if="shopItem" class="edit-item container">
    <form @submit.prevent="handleSubmit">
      <div class="edit-item__title">
        <label class="label" for="title"> <h2>Title</h2> </label>
        <input v-model="shopItem.title" required type="text" />
      </div>
      <div class="edit-item__tags">
        <label class="label" for="tags"
          ><h2>Tags</h2>
          <span>(press Enter to add tag)</span></label
        >
        <textarea v-model="tempTags" @keyup="addTag"></textarea>
        <div class="temp-tags">
          <span
            v-for="tag in shopItem.tags"
            :key="tag"
            @click="deleteTag(tag)"
            >{{ tag }}</span
          >
        </div>
      </div>
      <button>Confirm Edit</button>
    </form>
    <!-- <button @click="debug">DEBUG</button> -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import getShopItem from "../scripts/getShopItem";
import { useRouter } from "vue-router";
import { db } from '@/firebase/config';

export default {
  props: ["id"],
  setup(props, context) {
    const tempTags = ref("");
    const router = useRouter();

    const { shopItem, error, getItem } = getShopItem();

    onMounted(async () => {
      await getItem(props.id);
    });

    const handleSubmit = async () => {
      const database = db.collection("shopItems").doc(shopItem.value.id)
      await database.update("title" , shopItem.value.title)
      await database.update("tags", shopItem.value.tags)

      router.push({ name: "Home" })
    };

    const addTag = (e) => {
      if (e.key == "Enter" && tempTags.value) {
        tempTags.value = tempTags.value.toUpperCase();
        shopItem.value.tags.push(tempTags.value);

        tempTags.value = "";
      }
    };

    const deleteTag = (tag) => {
      shopItem.value.tags = shopItem.value.tags.filter((t) => {
        return t != tag;
      });
    };

    const debug = () => {
      console.log(shopItem.value.title);
    };

    return {
      shopItem,
      tempTags,
      error,
      handleSubmit,
      addTag,
      deleteTag,
      debug,
    };
  },
};
</script>

<style>
.edit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.edit-item form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
}
.edit-item label {
  margin-bottom: 0.5em;
}
.edit-item form textarea,
.edit-item form input {
  width: 100%;
}
.edit-item form button {
  margin-top: 1em;
}
</style>
