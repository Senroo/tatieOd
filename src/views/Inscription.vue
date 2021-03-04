<template>
  <div class="home">
    <div class="inscription_header">
      <img class="image_home" alt="Vue logo" src="../assets/logo.png">
      <h1>Créer mon compte</h1>

      </div>
    <div class="incripstion_formulaire pl-3 pr-3">
      <form action="https://getform.io/f/3edfd71d-de9e-4e76-9212-ed11e7a6fb0a" method="POST">
        <b-form-group
            id="input-group-1"
            label="Ton adresse mail :"
            label-for="input-1"
            description="Nous ne partagerons jamais votre courriel avec quelqu'un d'autre."
        >
          <b-form-input
              name="email"
              id="input-1"
              type="email"
              placeholder="Email"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ton prénom :" label-for="input-2">
          <b-form-input
              name="name"
              id="input-2"
              placeholder="Ton prénom"
              required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Mot de passe :" label-for="input-3">
          <b-form-input
              type="password"
              name="password"
              id="input-3"
              placeholder="Mot de passe"
              required
          ></b-form-input>
        </b-form-group>


        <b-button type="submit" class="inscription_boutton mt-5">Inscription</b-button>
      </form>
    </div>
    <div class="inscription_footer">
    <router-link to="/connexion"><p class="banner mt-5 pt-2">J'ai déjà un compte, connexion.</p></router-link>
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
#input-group-1__BV_label_{
  color: white;
}
.inscription_footer{
  height: 19vh;
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
        name: '',
        food: null,
        checked: []

      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
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
