<template>
  <div class="aside-container">
    <h2 class="header">Sortuj po</h2>
    <div class="sort-options">
      <div class="text">
        <input v-model="sort" v-on:change="$emit('sort-key-change', 'pages')" name="sort" type="radio" value="pages">
        ilości stron
      </div>
      <div class="text">
        <input v-model="sort" v-on:change="$emit('sort-key-change', 'sortReleaseDate')" name="sort" type="radio" value="sortReleaseDate">
        dacie wydania
      </div>
      <div class="text">
        <input v-model="sort" v-on:change="$emit('sort-key-change', 'surname')" name="sort" type="radio" value="surname">
        nazwisku autora
      </div>
    </div>
    <div>
      <div class="divider"></div>
    </div>
    <h2 class="header">Pokaż tylko</h2>
    <div class="text">
      Powyżej
      <input v-model.number="minPages" v-on:input="$emit('min-pages-change', $event.target.value)" class="input" type="text">
      stron
    </div>
    <div>
      <div class="divider"></div>
    </div>
    <div class="button-container">
      <button class="button text" v-on:click="clean()">Wyczyść</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'book-filter',
    data: function () {
      return {
        sort: null,
        minPages: ''
      }
    },
    methods: {
      clean() {
        this.sort = null;
        this.minPages = '';
        this.$emit('minPagesChange', 0);
        this.$emit('sortKeyChange', null)
      }
    }
  };
</script>

<style scoped>
</style>
