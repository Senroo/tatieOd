<template>
  <div class="home">
    <router-link to="/inscription" style="text-decoration:none;">
    <img class="image_home" alt="Vue logo" src="../assets/home.jpg">
    <h1 class="mt-5">Tatie Odette</h1>
    <p>Le chocolat à impression 3D personnalisable</p>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.image_home{
  width: 100%;
}
h1{
  color: #B9934C;
}
p{
  color: black;
}
.home{
  height:90vh;
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  }
}
</script>
