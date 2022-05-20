<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Por favor inicie sesión</h1>

    <input v-model="data.email" type="email" class="form-control" placeholder="Correo" required>

    <input v-model="data.password" type="password" class="form-control" placeholder="Clave" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
    <div>
      <router-link to="/menu">Ingreso como invitado</router-link>
    </div>
    
  </form>
</template>

<script lang="ts">
import {reactive} from 'vue';
import {useRouter} from "vue-router";
import menu from "../components/Menu.vue";
const axios = require('axios').default;


export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: '',
      password: ''
    });
    const router = useRouter();
    const submit = async () => {
      const response = await axios.post('http://sisparking-backend.herokuapp.com/api/auth/login', 
      data);
      if(response.data){
        await router.push('/menu');
      }
      else {
        alert("Credenciales incorrectos")
      }
      
    }
    return {
      data,
      submit
    }
  },
  components: {
      menu: menu 
  },  
}
</script>