<template>
  <div id="app">
    <div id="nav">
      <Slide>
        <router-link to="/landing"><span>Map</span></router-link>
        <router-link to="/video"><span>Mes vidéos</span></router-link>
        <router-link to="/contact"><span>Contactez-nous</span></router-link>
        <router-link to="/profil"><span>Profil</span></router-link>
      </Slide>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'
export default{
  components:{
    Slide,
  }
}
</script>
<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #191718;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
