<template>
  <div class="home">
    <img class="image-home" alt="Vue logo" src="../assets/logo.png">
    <div class="map_body">
      <div class="map_body-header">
        <h2 class="mb-5">Vidéo de mon chocolat</h2>
        <h3>Obtenez la vidéo de l'impression de votre
          chocolat juste ici :</h3>
        <div class=" mt-5">
          <img class="mb-5" src="../assets/qr-code.svg">
          <iframe height="315" src="https://www.youtube.com/embed/OXkgrWjykSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bm-menu{
  background-color:#191718!important;
}
iframe{
  width: 100%;
}
h2{
  color:#B9934C;
}
h3{
  color:white;
}
.image-map{
  width:100%;
}

</style>

<script>
// @ is an alias to /src


export default {
}

</script>
