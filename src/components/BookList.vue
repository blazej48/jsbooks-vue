<template>
  <div>
    <BookItem v-for="(book, i) in books" :book="book" :key="book.title" :number="i+1"/>
  </div>
</template>

<script>
  import BookItem from './BookItem';

  export default {
    name: 'BookList',
    components: {
      BookItem,
    },
    props: ['books']
  }
</script>
