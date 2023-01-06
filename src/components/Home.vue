<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "app",
  components: { NavbarVue },
  data() {
    return {
      profile: null
    }
  },
  methods: {
    fetchProfileData() {
      fetch("https://api.github.com/users/oyindamolaWbCode")
        .then((response) => response.json())
        .then((data) => {
          this.profile = data;
          console.log(data)
        })
    }
  },
  mounted() {
    this.fetchProfileData();
  }
};
</script>

<template>
  <main>
    <div class="profileData">
      <!-- <div v-for="profile in profiles" v-bind:key="profile.id">
        <h6>{{profile.name}}</h6>
        <p>{{profile.login}}</p>
        <router-link>{{profile.html_url}}</router-link>
        <h6>{{profile.public_repos}}</h6>
        </div> -->
      <div v-if="profile">
        <p>Github_Name: {{ profile.name }}</p>
        <p>Github_username: {{ profile.login }}</p>
        <router-link to="/https://github.com/oyindamolaWbCode">Profile Link</router-link>
        <p></p>
        <p>Numbers_of_repos: {{ profile.public_repos }}</p>
      </div>
      <div v-else>
        Loading...
      </div>

    </div>
  </main>
</template>

<style >

</style>
