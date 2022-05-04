<template>
  <div class="reservar">
    <div>
      <label> Duracion de la Reserva </label>
      <input type="text" v-bind="data.duracionReserva" class="form-control" />
    </div>

    <div>
      <label> Hora de la Reserva </label>
      <input type="text" v-bind="data.horaReserva" class="form-control" />
    </div>
    <div>
      <label> Zonas </label>
      <select v-bind="data.zonaReserva" class="form-control">
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
      <select v-bind="data.espacioReserva" class="form-control">
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
      <input type="text" v-bind="data.placa" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Reservar</button>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
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
        { idNombre: 1, nombre: "138A" },
        { idNombre: 2, nombre: "139A" },
        { idNombre: 3, nombre: "140A" },
      ],
      horaReserva: "",
      duracionReserva: "",
      zonaReserva: "",
      espacioReserva: "",
      placa: "",
    });
    const router = useRouter();
    const submit = async () => {
      await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
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
.reservar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.reservar div {
  width: 100%;
  margin: 0.5em 0;
}
</style>