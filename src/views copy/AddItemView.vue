<template>
  <div class="add-item container">
    <form @submit.prevent="handleSubmit">
      <div class="add-item__title">
        <label class="label" for="title"> <h2>Title</h2> </label>
        <input v-model="title" required type="text" />
      </div>
      <div class="add-item__tags">
        <label class="label"
          ><h2>Tags</h2>
          <span>(press Enter to add tag)</span></label
        >
        <textarea v-model="tempTags" @keyup="addTag"></textarea>
        <div class="temp-tags">
          <span v-for="tag in tags" :key="tag" @click="deleteTag(tag)">{{
            tag
          }}</span>
        </div>
      </div>
      <button>Add New Item</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from '@/firebase/config';

export default {

  setup() {
    const title = ref("");
    const tags = ref([]);
    const tempTags = ref("");
    const router = useRouter();

    const handleSubmit = async () => {
      let item = {
        title: title.value,
        tags: tags.value,
        bought: false,
      };
      
      await db.collection('shopItems').add(item)

      router.push({ name: "Home" });

    };

    const addTag = (e) => {
      if (e.key == "Enter" && tempTags.value) {
        tempTags.value = tempTags.value.toUpperCase();
        tags.value.push(tempTags.value);

        tempTags.value = "";
      }
    };

    const deleteTag = (tag) => {
      tags.value = tags.value.filter((t) => {
        return t != tag;
      });
    };

    const debug = () => {
      console.log(shopItem.value.title);
    };

    return {
      title,
      tags,
      tempTags,
      handleSubmit,
      addTag,
      deleteTag,
      debug,
    };
  },
};
</script>

<style>
.add-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add-item form {
  width: min(20em, 85vw);
  /* background-color: seagreen; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
}
.add-item label {
  margin-bottom: 0.5em;
}
.add-item form textarea,
.add-item form input {
  width: 100%;
}
.add-item form button {
  margin-top: 1em;
  padding: 1em 2em;
  text-transform: uppercase;
  font-weight: var(--fw-bold);
}
.label {
  display: flex;
  align-items: flex-end;
  gap: 0.3em;
}
.label span {
  font-size: var(--fs-300);
}
.temp-tags {
  width: 100%;
  margin-top: 0.5em;
  display: flex;
  flex-wrap: wrap;
  /* background-color: gold; */
  gap: 0.2em;
}
.temp-tags span {
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);
  background-color: var(--clr-neutral-750);
  padding: 0.5em 1em;
  border-radius: 16px;
}
.temp-tags span:hover {
  cursor: pointer;
  text-decoration: line-through;
}
</style>
