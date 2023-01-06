<template>
    <div class="page-container">
        <div class="text-container">
            <div class="child">
                <h1 class="ntF">404</h1>
                <h3>page not found</h3>
                <p>Nothing to see here 😮‍💨</p>
                <div>
                    <router-link to="/" custom v-slot="{ navigate }">
                        <button @click="navigate" class="notFB" role="link">
                            Homepage
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="image-container">
            <img :src="emptyContainer" />
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
import emptyContainer from "../assets/search.jpg";

export default {
    data() {
        return {
            emptyContainer: emptyContainer
        }
    }

}
</script>
<style>
img {
    width: 100%;
    /* height:80%; */
    background-repeat: no-repeat;
    background-size: cover;
    background-color: black;
    max-height: 100vh;
}

.page-container {
    display: flex;
    height: 100vh;
}

.image-container {
    width: 100%;
}

.text-container {
    position: absolute;
    z-index: 2;
    left: 25%;
    top: 30%;
}

.ntF  {
    text-shadow: red 3px 0 10px;
    font-weight: bolder;
    font-size: 60px;

}

.notFB{
    padding: 15px 30px;
    border-radius: 0px 10px 0px 10px;
}
</style>