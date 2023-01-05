<script>
export  default{
  name: "app",
  data(){
    return{
    profile: null
    }
  },
  methods:{
    fetchProfileData(){
      fetch("https://api.github.com/users/oyindamolaWbCode")
      .then((response) => response.json())
      .then((data) => {
        this.profile = data;
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
  <main>
   <div class="profileData">
      <!-- <div v-for="profile in profiles" v-bind:key="profile.id">
        <h6>{{profile.name}}</h6>
        <p>{{profile.login}}</p>
        <router-link>{{profile.html_url}}</router-link>
        <h6>{{profile.public_repos}}</h6>
        </div> -->
        <div v-if="profile">
        <p>Github_Name: {{profile.name}}</p>
        <p>Github_username: {{profile.login}}</p>
        <router-link to ="/https://github.com/oyindamolaWbCode">{{profile.html_url}}</router-link>
        <p></p>
        <p>Numbers_of_repos: {{profile.public_repos}}</p>
        </div>
        <div v-else>
          Loading...
        </div>
      <!-- <div v-for="(profile, i) in profiles" :key="i"> -->
    <!-- </div> -->
</div>
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
