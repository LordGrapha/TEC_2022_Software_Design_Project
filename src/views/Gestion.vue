<template>

  <div class=container>
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Gestión de Usuario</h1>

      <input v-model="data.username" class="form-control" placeholder="Nombre de usuario" required>

      <input v-model="data.email" type="email" class="form-control" placeholder="Correo" required>

      <input v-model="data.cedula" type="text" class="form-control" placeholder="Identificacion" required>

      <input v-model="data.placa" type="placa" class="form-control" placeholder="Número de Placa" required>
<!--
      <div class=box>
        <p>
          <input type="checkbox" style="margin: 10px">
          Permiso reserva
        </p>
      </div>
      <div>
        <p>
          <input type="checkbox" style="margin: 10px">
          Permiso consulta
        </p>             
      </div>
-->
      <button class="w-100 btn btn-lg btn-primary" type="submit">Agregar</button>
    </form>



  </div>
</template>

<script lang="ts">
import {reactive} from 'vue';
import {useRouter} from "vue-router";
const axios = require('axios').default;
export default {
  name: "Register",
  setup() {
    const data = reactive({
      username: '',
      email: '',
      placa: '',
      cedula: ''

    });
    const router = useRouter();
    const submit = async () => {
      console.log("Submitting");
      const response = await axios.post('http://localhost:5000/api/auth/signUp', data);
      console.log("Response");
      console.log(response);
      await router.push('/menu');
    }
    return {
      data,
      submit
    }
  }
}

</script>