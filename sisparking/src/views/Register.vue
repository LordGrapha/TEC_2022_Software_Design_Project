<template>
  <div class=container>
    <form @agregar.prevent="agregar">
      <h1 class="h3 mb-3 fw-normal">Gestión de Usuario</h1>

      <input v-model="data.name" class="form-control" placeholder="Nombre de usuario" required>

      <input v-model="data.email" type="email" class="form-control" placeholder="Correo" required>

      <input v-model="data.password" type="placa" class="form-control" placeholder="Número de Placa" required>

      <button class="w-100 btn btn-lg btn-primary" type="agregar">Agregar</button>
    </form>
    <div>
      <p>
        <input type="checkbox" v-model="reserva">
        Permiso reserva
      </p>
      <p>
        <input type="checkbox" v-model="consulta">
        Permiso consulta
      </p>             
    </div>
  </div>
</template>

<script lang="ts">
import {reactive} from 'vue';
import {useRouter} from "vue-router";
export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      placa: ''
    });
    const router = useRouter();
    const agregar = async () => {
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      await router.push('/login');
    }
    return {
      data,
      agregar
    }
  }
}
</script>