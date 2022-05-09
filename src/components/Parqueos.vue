<template>
  <div class="reservar">
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
      <div class="form-group">
        <label for="Direccion">Direccion</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-bind="data.direccionZona"
        ></textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Consultar</button>
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
      direccionZona: "",
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