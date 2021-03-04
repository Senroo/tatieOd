<template>
  <div class="home">
    <img class="image-home" alt="Vue logo" src="../assets/logo.png">
    <div class="map_body">
      <div class="map_body-header">
        <h2 class="mb-5">Trouver une machine</h2>
        <h3>Trouver la machine la plus près de moi</h3>
        </div>
      <div class="map">
      <img class="image-map" alt="Vue logo" src="../assets/map.svg">
      </div>
    </div>
  </div>
</template>
  <style scoped>
  h2{
    color:#B9934C;
  }
  h3{
    color:white;
  }
  .image-map{
    width:100%;
  }
  .map{
    height:60vh;
  }

</style>

<script>
// @ is an alias to /src


export default {
}

</script>
