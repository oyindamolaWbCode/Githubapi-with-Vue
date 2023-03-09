<template>
    <div class="pagination">
      <button v-if="page > 1" @click="prevPage">Prev</button>
      <button v-for="pageNumber in pages" :key="pageNumber" @click="changePage(pageNumber)" :class="{ active: pageNumber === page }">{{ pageNumber }}</button>
      <button v-if="page < totalPages" @click="nextPage">Next</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Pagination',
    props: {
      perPage: {
        type: Number,
        default: 10,
      },
      page: {
        type: Number,
        default: 1,
      },
      endpoint: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        totalItems: 0,
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.perPage);
      },
      pages() {
        const pages = [];
  
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
  
        return pages;
      },
    },
    methods: {
      async changePage(pageNumber) {
        const response = await axios.get(`${this.endpoint}?per_page=${this.perPage}&page=${pageNumber}`);
  
        this.totalItems = parseInt(response.headers['x-total-count']);
        this.$emit('page-changed', pageNumber, response.data);
      },
      async prevPage() {
        this.changePage(this.page - 1);
      },
      async nextPage() {
        this.changePage(this.page + 1);
      },
    },
  };
  </script>
  
  <style>
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .pagination button {
    border: none;
    background: transparent;
    padding: 0.5rem;
    margin: 0 0.25rem;
    cursor: pointer;
  }
  
  .pagination button.active {
    background-color: #007bff;
    color: #fff;
  }
  </style>
  