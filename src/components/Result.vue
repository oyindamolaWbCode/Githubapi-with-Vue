
<template>
    <div class="container">
        <h4>Result shows here.</h4>
        <div class="box">
            <ul key="{repo.id}"> 
                <li>Repository Name: {{repo.name}}</li>
                <li>Language: {{ repo.language }}</li>
                <li>ID: {{ repo.id }}</li>
                 </ul>
        </div>
    </div>
</template>
<script>

export default {
    name: "Result",

    data(){
        return {

        }
    },
    methods: {

    }
}
</script>
<style>
   .box{
    margin:100px auto;
  width:30%;
  height:200px;
  /* box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
  0.3em 0.3em 1em rgba(0, 0, 0, 0.3); */
  padding-top: 18px;
  color:white;
   }
</style>