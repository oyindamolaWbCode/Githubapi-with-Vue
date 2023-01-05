<script>
export  default{
  name: "app",
  data(){
    return{
    profile: [],
    }
  },
  methods:{
    fetchProfileData(){
      fetch("https://api.github.com/users/oyindamolaWbCode")
      .then((response) => response.json())
      .then((data) => {
        this.profile = data
        console.log(data)
      })
    }
  },
  mounted(){
    this.fetchProfileData();
  }
};
</script>

<template>
  <header>
<ul>
  <li>Projects</li>
  <li>Github Link</li>
  <li>Doumentation</li>
  <li>Projects</li>
</ul>
  </header>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Repositories">Repositories</router-link>
  </div>
  <router-view />
  <main>
   <!-- <div class="repos">
    <div v-for="(repo, i) in repos" :key="i">{{repo.name}}</div>
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
