<template>
  <div class="aside-container">
    <h2 class="header">Sortuj po</h2>
    <div class="sort-options">
      <div class="text"><input v-model="filter.sort" @change="update" name="sort" type="radio" value="pages">ilości stron</div>
      <div class="text"><input v-model="filter.sort" @change="update" name="sort" type="radio" value="sortReleaseDate">dacie wydania</div>
      <div class="text"><input v-model="filter.sort" @change="update" name="sort" type="radio" value="surname">nazwisku autora</div>
    </div>
    <div><div class="divider"></div></div>
    <h2 class="header">Pokaż tylko</h2>
    <div class="text">Powyżej<input v-model.number="filter.minPages" @input="update" class="input" type="text">stron</div>
    <div><div class="divider"></div></div>
    <div class="button-container">
      <button class="button text" @click="clean()">Wyczyść</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookFilter',
    props: {
      filter: {
        default: () => {
          return {};
        }
      }
    },
    methods: {
      update() {
        this.$emit('input', this.filter)
      },
      clean() {
        this.$emit('input', {
          sort: null,
          minPages: ''
        });
      }
    }
  };
</script>

<style scoped>
</style>
