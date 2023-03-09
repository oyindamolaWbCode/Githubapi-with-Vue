<script>
//import NavbarVue from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "app",
  data() {
    return {
      repos: [],
    }
  },
  methods: {
    fetchRepos() {
      fetch("https://api.github.com/users/oyindamolaWbCode/repos")
        .then((response) => response.json())
        .then((data) => {
          this.repos = data
          console.log(data)
        })
    }
  },
  mounted() {
    this.fetchRepos();
  }
};
</script>

<template>

  <header>
    <div id="nav">
<ul class="nav justify-content-end">
  <li class="nav-item">
    <router-link class="nav-link active"  to ="/">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :to="{name: 'Result'}">Result</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" :to="{name: 'Repositories'}">Repositories</router-link>
  </li>
  <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'NotFound'}">NotFound</router-link>
            </li>
</ul>
     <!-- 
     <router-link :to ="{name : 'Result'}">Result</router-link> -->
    </div>
    <router-view />
  </header>
  <main>
    <!-- <div class="repos">
    <div v-for="(repo, i) in repos" :key="i">
      {{repo.name}}
      {{ repo.id }}
    </div>
   </div> -->
  </main>
</template>

<style >

</style>
