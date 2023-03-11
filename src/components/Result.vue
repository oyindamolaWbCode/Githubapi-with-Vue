<template>
    <div>
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.description }}</p>
      <div>
        <span>Language: {{ repo.language }}</span>
        <br />
        <span class="ml-3">Stars: {{ repo.stargazers_count }}</span>
      </div>
      <div class="mt-3">
        <h4>Files</h4>
        <ul>
          <li v-for="file in files" :key="file.name">
            <a :href="file.html_url">{{ file.name }}</a>
          </li>
        </ul>
      </div>
      <button class="btn btn-primary mb-2" @click="$emit('back-to-repos')">
        Back to Repositories
      </button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Result',
    props: {
      repo: Object
    },
    data() {
      return {
        files: []
      };
    },
    mounted() {
      this.fetchFiles();
    },
    methods: {
      fetchFiles() {
        axios.get(this.repo.url + '/contents')
          .then(response => {
            this.files = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@200&family=Josefin+Sans:ital@1&family=Montserrat:wght@100;600&family=Overpass:wght@300&family=Poppins:wght@300&family=Roboto:wght@300&display=swap');

  h3, h4{
    font-family: 'Lato';
  }

  a{
    text-decoration: none;
    color:azure;
  }
  </style>