<template>
  <div class="home">
    <div class="inscription_header">
      <img class="image_home" alt="Vue logo" src="../assets/logo.png">
      <h1>Créer mon compte</h1>

    </div>
    <div class="incripstion_formulaire pl-3 pr-3">
      <b-form submit="/">
        <b-form-group
            id="input-group-1"
            label="Ton adresse mail :"
            label-for="input-1"
        >
          <b-form-input
              id="input-1"
              type="email"
              placeholder="Email"
              required
          ></b-form-input>
        </b-form-group>


        <b-form-group id="input-group-3" label="Mot de passe :" label-for="input-3">
          <b-form-input
              type="password"
              id="input-3"
              v-model="form.passeword"
              placeholder="Mot de passe"
              required
          ></b-form-input>
        </b-form-group>


        <b-button type="submit" class="inscription_boutton mt-5">Connexion</b-button>
        <router-link to="/landing"><b-button type="submit" class="inscription_boutton mt-5">Vers la home</b-button></router-link>
      </b-form>
    </div>

    <router-view></router-view>
  </div>
</template>
<script type="text/javascript" src="https://form.jotform.com/jsform/210624207051037"></script>
<style scoped>
.banner{
  background-color: #fff;
  border: 2px solid #B9934C;
  height: 32%;
}
#app > div.home > div.inscription_footer > a{
  color: #B9934C!important;
}
.home{
  height: 90vh;
}
.image_home{
  width: 35%;
}
h1{
  color: #B9934C;
}
.incripstion_formulaire{
}
.inscription_boutton{
  background-color: #B9934C;
  color:white;
}
label{
  color:white!important;
}

</style>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{
      form: {
        email: '',

      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
