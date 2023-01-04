<script>
export  default{
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){

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
   
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
