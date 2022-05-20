<template>
  <div class="direccion">
    <div>
      <label> Duracion de la Reserva </label>
      <input type="text" v-model="data.duracionReserva" class="form-control" />
      <label> Zonas </label>
      <select v-model="data.zonaReserva" class="form-control">
        <option
          v-for="zona in data.catalogoZona"
          :value="zona.idNombre"
          :key="zona.idNombre"
          
        >
          {{ zona.nombre }}
        </option>
      </select>
    </div>
    <div>
      <label> Espacios </label>
      <select v-model="data.espacioReserva" class="form-control">
        <option
          v-for="espacio in data.catalogoEspacio"
          :value="espacio.idNombre"
          :key="espacio.idNombre"
        >
          {{ espacio.nombre }}
        </option>
      </select>
    </div>
    <div>
      <label> Numero de Placa </label>
      <input type="text" v-model="data.placa" class="form-control" />
    </div>
    <button @click="submit" type="submit" class="btn btn-primary">Reservar</button>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { onMounted } from '@vue/runtime-core';
const axios = require('axios').default;

export default {
  name: "Login",
  setup() {
    const data = reactive({
      catalogoZona: [
        { idNombre: 1, nombre: "zonaA" },
        { idNombre: 2, nombre: "zonaB" },
        { idNombre: 3, nombre: "zonaC" },
      ],
      catalogoEspacio: [
        { idNombre: 1, nombre: "1A" },
        { idNombre: 2, nombre: "2A" },
      ],
      horaReserva: "",
      duracionReserva: "",
      zonaReserva: "",
      espacioReserva: "",
      placa: "",
    });
    const router = useRouter();
    const submit = async () => {
      console.log(data);
      
      await axios.post("http://localhost:5000/api/reservation/reserve", data);
      await router.push("/");
    };
    return {
      data,
      submit,
    };
  },
};
</script>
<style scoped>
.direccion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.direccion div {
  width: 100%;
  margin: 0.5em 0;
}
</style>