<script>
import NavbarVue from "../components/Navbar.vue";
import Image from "../assets/me.jpg";
export default {
  name: "app",
  components: { NavbarVue },
  data() {
    return {
      profile: null,
      Image: Image,
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
  <div class="the-container">
    <div class="the-flexy-container">
      <div class="profileData-left">
        <!-- <div v-for="profile in profiles" v-bind:key="profile.id">
        </div> -->
        <div v-if="profile">
          <div class="image">
            <img :src="Image" class="repo-profile"/>
          </div>
          <p>Github_Name: {{ profile.name }}</p>
          <p>Github_username: {{ profile.login }}</p>
          <router-link to="/https://github.com/oyindamolaWbCode">Profile Link</router-link>
          <p>Numbers_of_repos: {{ profile.public_repos }}</p>
          <p>Site_Admin: {{ profile.site_admin }}</p>
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
      <div class="reposList">

      </div>
    </div>
  </div>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@200&family=Josefin+Sans:ital@1&family=Montserrat:wght@100;600&family=Overpass:wght@300&family=Poppins:wght@300&family=Roboto:wght@300&display=swap');

 .the-container{
  padding:20px;
 }

 .repo-profile{
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 48%;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 250px;
 }

 .the-flexy-container{
  display:flex;
  justify-content: space-between;
  width:100%;
 }

 .profileData-left{
  width:30%;
 }

 p{
  font-family: 'Montserrat', sans-serif;
 }
</style>
