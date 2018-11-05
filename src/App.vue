<template>
  <div class="main-container">
    <book-filter class="aside-container"
                 @sort-key-change="onSortKeyChange"
                 @min-pages-change="onMinPagesChange"
    />
    <book-list class="list-container" :books="books"/>
  </div>
</template>

<script>
  import BookList from './components/BookList';
  import BookFilter from './components/BookFilter';
  import {Book} from './Book';
  import booksjson from './books.json'
  import {sortBy} from 'lodash'

  const books = booksjson.map(b => new Book(b));

  export default {
    name: 'app',
    components: {
      BookList, BookFilter
    },
    data() {
      return {
        sortKey: null,
        minPages: 0
      }
    },
    computed: {
      books: function () {
        let result = books.filter(b => b.pages > +this.minPages);
        result = sortBy(result, this.sortKey);
        return result;
      }
    },
    methods: {
      onSortKeyChange(sortKey) {
        this.sortKey = sortKey;
      },
      onMinPagesChange(minPages) {
        this.minPages = minPages;
      }
    }
  }
</script>

<style>
  .title {
    height: 3rem;
    position: relative;
    border: 4rem;
  }

  .title__square {
    background-color: #F5D764;
    width: 3rem;
    height: 3rem;
    position: absolute;
    z-index: 0;
  }

  .title__text {
    margin-left: 1rem;
    position: absolute;
    bottom: -0.3rem;
  }

  .text--italic {
    font-style: italic;
  }

  .text--gray {
    color: #AAAAAA;
  }

  .text--link {
    color: #D94533;
    text-decoration-style: dashed;
  }

  .text--big {
    font-size: 1.2rem;
  }

  .text--small {
    font-size: 0.8rem;
  }

  .text--light {
    font-weight: 300;
  }

  .text--heavy {
    font-weight: 700;
  }

  .text--to-left {
    text-align: left;
    padding-left: 0.2rem;
  }

  .text--to-right {
    text-align: right;
  }

  body {
    background-color: #EEEEEE;
    font-family: 'Lato', sans-serif;
    height: 100%;
  }

  .title-container {
    padding: 1rem;
  }

  .main-container {
    display: flex;
  }

  .list-container {
    display: flex;
    flex-wrap: wrap;
    max-width: 80rem;
  }

  .aside-container {
    margin: 0 0 2rem 2rem;
    min-width: 12rem;
  }

  .button-container {
    text-align: center;
    margin: auto;
  }

  .divider {
    border-bottom: 1px solid #DEDEDE;
    margin: 1rem 0;
  }

  .divider--dotted {
    border-bottom-style: dashed;
  }

  .button {
    padding: 0.7rem 1.4rem;
    color: white;
    background-color: #AAAAAA;
    border-radius: 0.4rem;
  }

  .input {
    border: none;
    margin: 0.5rem;
    width: 3rem;
    height: 2rem;
  }

  .sort-options {
    margin: 1rem 1rem 2rem;
  }

  @media only all and (max-width: 760px) {
    .main-container {
      display: block;
    }
  }

  .row {
    display: flex;
  }

  .row__field-50 {
    width: 50%;
  }

  .modal {
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.78);
    transition: .4s;
    z-index: 100;
    display: block;
  }

  .modal__content {
    max-width: 400px;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
    background-color: #1ABC9C;
    border-radius: 5px;
    color: #fff;
  }
</style>
