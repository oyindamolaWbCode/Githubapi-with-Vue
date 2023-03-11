<template>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Repo ID</th>
            <th>Language</th>
            <!-- <th>Stars</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="repo in paginatedRepositories" :key="repo.id">
            <td class="sizing">{{ repo.name }}</td>
            <td class="sizing">{{ repo.id}}</td>
            <td class="sizing">{{ repo.language }}</td>
            <!-- <td>{{ repo.stargazers_count }}</td> -->
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center p-5">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" aria-label="Previous" @click.prevent="prevPage()">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage()">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Pagination',
    //props: [fetchRepositories],
    data() {
      return {
        repositories: [],
        currentPage: 1,
        itemsPerPage: 5,
        totalPages: 1,
      };
    },
    mounted() {
      this.fetchRepositories();
    },
    methods: {
      fetchRepositories() {
        axios.get('https://api.github.com/users/oyindamolaWbCode/repos')
          .then(response => {
            this.repositories = response.data;
            this.totalPages = Math.ceil(this.repositories.length / this.itemsPerPage);
          })
          .catch(error => {
            console.error(error);
          });
      },
      changePage(page) {
        this.currentPage = page;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
    },
    computed: {
      pages() {
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
        return pages;
      },
      paginatedRepositories() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.repositories.slice(startIndex, endIndex);
      },
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@200&family=Josefin+Sans:ital@1&family=Montserrat:wght@100;600&family=Overpass:wght@300&family=Poppins:wght@300&family=Roboto:wght@300&display=swap');

  .nav-link{
  font-family: 'Lato';
  font-size: 20px;
}

th{
  font-family: 'Lato';
  color:azure;
}

td{
  color:azure; 
}

tr:nth-child(even) {background-color: #221d1d;}

.table>:not(caption) td{
  padding: 1.5rem .5rem;
}

.pagination{
  padding: 20px;
}

li{
  width:100px;
}
</style>
  
  
  
  
  