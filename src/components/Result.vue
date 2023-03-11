
<template>
    <div class="container">
        <!-- <h4>Result shows here.</h4>
        <div class="box">
            <ul key="{repo.id}"> 
                <li>Repository Name: {{repo.name}}</li>
                <li>ID: {{ repo.id }}</li>
                <li>Language: {{ repo.language }}</li>
                <li>ID: {{ repo.desscription }}</li>
                <li>Stars: {{ repo.stargazers_count }}</li>
                
                 </ul>
        </div> -->
    </div>
</template>
<script>

export default {
    name: "Result",
    props: [],

    data(){
        return {

        }
    },
    methods: {

    }
}
</script>
<style>
   .box{
    margin:100px auto;
  width:30%;
  height:200px;
  /* box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3); */
  padding-top: 18px;
  color:white;
   }
</style> 

<!-- <template>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Stars</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="repo in paginatedRepositories" :key="repo.id">
            <td><a :href="repo.html_url" target="_blank">{{ repo.name }}</a></td>
            <td>{{ repo.description }}</td>
            <td>{{ repo.language }}</td>
            <td>{{ repo.stargazers_count }}</td>
            <td>
              <button type="button" class="btn btn-primary" @click="showDetails(repo)">
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
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
      <div v-if="selectedRepo" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ selectedRepo.name }}</h5>
              <button type="button" class="close" @click="closeDetails">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div v-if="selectedRepo.description">
                <p><strong>Description:</strong> {{ selectedRepo.description }}</p>
              </div>
              <div v-if="selectedRepo.language">
                <p><strong>Language:</strong> {{ selectedRepo.language }}</p>
              </div>
              <div>
                <p><strong>Stars:</strong> {{ selectedRepo.stargazers_count }}</p>
              </div>
              <div>
                <p><strong>URL:</strong> <a :href="selectedRepo.html_url" target="_blank">{{ selectedRepo.html_url }}</a></p>
              </div>
              <div>
                <p><strong>Created at:</strong> {{ selectedRepo.created_at }}</p>
              </div>
              <div>
                <p><strong>Updated at:</strong> {{ selectedRepo.updated_at }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: '',
  }  -->
