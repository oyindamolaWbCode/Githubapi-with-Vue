<script>
import NavbarVue from "./components/Navbar.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "app",
  components: { NavbarVue },
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
     <NavbarVue />
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
