<template>
  <div class="filter-nav-bought">
    <button
    class="btn-secondary"
      @click="filterBy('all')"
      :class="{ active: currentFilter == 'all' }"
    >
      All
    </button>
    <button
    class="btn-secondary"
      @click="filterBy('bought')"
      :class="{ active: currentFilter == 'bought' }"
    >
      Bought
    </button>
    <button
    class="btn-secondary"
      @click="filterBy('need')"
      :class="{ active: currentFilter == 'need' }"
    >
      Need
    </button>
  </div>
</template>

<script>

export default {
  props: ["currentFilter"],
  emits: ['changeFilter'],
  setup(props, context) {
    const filterBy = (filter) => {
      context.emit("changeFilter", filter);
    };

    return {filterBy}
  }

};
</script>

<style>
.filter-nav-bought {
    display: flex;
    flex-wrap: wrap;
    gap: .5em;
}
.btn-secondary.active {
  border: 2px solid var(--clr-primary-400);
  color: var(--clr-primary-400);
  opacity: 1;
}
.btn-secondary.active:hover {
  background-color: none;
}

.filter-nav-tags {
  width: 100%;
  margin-top: 0.5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.2em;
}
.filter-nav-tags button {
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);
  background-color: var(--clr-neutral-700);
  padding: 0.5em 1em;
  border-radius: 16px;
}


</style>
