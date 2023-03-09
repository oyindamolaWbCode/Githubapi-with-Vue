<script>
import Image from "../assets/me.jpg";
import Repositories from "./Repositories.vue";

export default {
    name: "Home",
    data() {
        return {
            profile: null,
            Image: Image,
            //repos: [],
            // repositories: [],
            // currentPage: 1,
            // itemsPerPage: 3,
            // totalPages: 1,
        };
    },
    methods: {
        fetchProfileData() {
            fetch("https://api.github.com/users/oyindamolaWbCode")
                .then((response) => response.json())
                .then((data) => {
                this.profile = data;
                console.log(data);
            });
        },
        
    },
    // watch:{
    //   currentPage: {
    //     handler: function(value){
    //       this.fetchRepos().catch(error =>{
    //         console.error(error)
    //       })
    //     }
    //   }
    // },
    mounted() {
        this.fetchProfileData();
        //this.fetchRepositories();
        //this.fetchRepos();
    },
    components: { Repositories }
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
            <img :src="Image" class="repo-profile" />
          </div>
          <p>Github_Name: {{ profile.name }}</p>
          <p>Github_Username: {{ profile.login }}</p>
          <router-link to="/https://github.com/oyindamolaWbCode">Profile Link</router-link>
          <p>Numbers_of_repos: {{ profile.public_repos }}</p>
          <p>Site_Admin: {{ profile.site_admin }}</p>
          <p>Profile_Type: {{ profile.type }}</p>
        </div>
        <div v-else>
          Loading...
        </div>
      </div>
      <div class="reposList">
        <div class="repos">
          <Repositories />
        </div>
      </div>
    </div>
  </div> 
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@200&family=Josefin+Sans:ital@1&family=Montserrat:wght@100;600&family=Overpass:wght@300&family=Poppins:wght@300&family=Roboto:wght@300&display=swap');

.the-container {
  padding: 20px;
}

.repo-profile {
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 48%;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 250px;
}

.the-flexy-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.profileData-left {
  width: 30%;
}

.reposList {
  width: 60%;
}

p {
  font-family: 'Montserrat', sans-serif;
}

.repo-table {
  margin-top: 50px;
}

.repo-table td,
.repo-table th {
  padding: 10px !important;
  font-family: 'Montserrat', sans-serif;
}
</style>
