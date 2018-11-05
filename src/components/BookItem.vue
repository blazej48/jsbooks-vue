<template>
  <div class="list-item">
    <div data-order class="list-item__number">{{number}}</div>
    <div class="list-item__cover"><img height="236" v-on:click="openModal" :src="book.cover.small"></div>
    <div class="list-item__content">
      <div class="list-item__header text text--big text--heavy">{{book.title}}</div>
      <div class="list-item__separator"></div>
      <div class="list-item__header text text--medium text--light text--italic">By {{book.author}}</div>
      <div class="row text text--small text--gray text--italic">
        <div class="row__field-50 text--to-right">Release Date:</div>
        <div class="row__field-50 text--to-left">{{book.releaseDate}}</div>
      </div>
      <div class="row text text--small text--gray text--italic">
        <div class="row__field-50 text--to-right">Pages:</div>
        <div class="row__field-50 text--to-left">{{book.pages}}</div>
      </div>
      <div class="row text text--small text--gray text--italic">
        <div class="row__field-50 text--to-right">Link:</div>
        <a class="row__field-50 text--to-left text--link" :href="book.link">shop</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {openModal} from "../modal";

  export default {
    name: 'book-item',
    props: ['number', 'book'],
    methods: {
      openModal() {
        openModal(this.book.cover.large)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-item {
    width: 22rem;
    display: flex;
    flex-direction: column;
  }

  .list-item--hidden {
    display: none;
  }

  .list-item__cover {
    justify-content: space-around;
    display: flex;
  }

  .list-item__separator {
    width: 3rem;
    height: 2px;
    background-color: red;
    margin: auto;
  }

  .list-item__header {
    margin: 1rem 0;
  }

  .list-item__number {
    color: #D7D7D7;
    font-size: 3rem;
    font-weight: 700;
  }

  .list-item__content {
    text-align: center;

  }

  @media only screen and (max-width: 560px) {
    .list-item {
      flex-direction: row;
      margin: 1rem 0;
      justify-content: space-around;
      width: 100%;
    }
  }
</style>
