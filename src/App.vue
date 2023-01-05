<script>
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
      <router-link to="/">Home</router-link>
      <router-link to="/Repositories">Repositories</router-link>
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

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
