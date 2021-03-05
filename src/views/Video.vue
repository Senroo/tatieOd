<template>
  <div class="home">
    <img class="image-home" alt="Vue logo" src="../assets/logo.png">
    <div class="map_body">
      <div class="map_body-header">
        <h2 class="mb-5">Vidéo de mon chocolat</h2>
        <h3>Scanner le QR Code présent sur l'interface</h3>
        <div class=" mt-5">
          <img class="mb-5" src="../assets/qr-code.svg">
          <h3>Extrait de votre vidéo ci-dessus : </h3>
          <iframe height="315" src="https://www.youtube.com/embed/OXkgrWjykSg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <b-button type="submit" class="inscription_boutton mt-3 mb-3">Enregistrer la vidéo</b-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.inscription_boutton{
  background-color: #B9934C;
  color:white;
}
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
