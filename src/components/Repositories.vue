<template>
    <ul>
        <li>{repo.id}</li>
    </ul>
 </template>

<script>
export default{
    props: ["repo"],
    // props: ["name"], ["id"], ["language"], ["visibility"], ["html_url"]
    data(){
        return{
            repos: []
        }

        },
      method: {},
    }
</script>