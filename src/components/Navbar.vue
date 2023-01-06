<template>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <div class="collapse navbar-collapse" id="navbarNav"> -->
    <ul class="nav justify-content-end">
        
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="./">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="./Repositories.vue">Repositories</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="./Result.vue">Result</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="./ErrorBoundary.vue">ErrorBoundary</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="./NotFound.vue">NotFound</router-link>
            </li>
</ul>
<!-- </div> -->
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
    
</style>