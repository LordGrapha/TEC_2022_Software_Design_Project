<template>
  <div>
    <b-sidebar id="sidebar-border" sidebar-class="border-right border-danger">
      <div>
        <ul>
          <li v-for="pagina in data.menu" :key="pagina.sitio">
            <a :href="pagina.direccion">{{ pagina.sitio }}</a>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const data = reactive({
      menu: [
        { sitio: "Gestion de Usuarios", direccion: "/gestion" },
        { sitio: "Reserva", direccion: "/gestion_reserva" },
        { sitio: "Parqueos", direccion: "/consulta_parqueos" },
        { sitio: "Informes", direccion: "/Informes" },
        { sitio: "Registar Placa", direccion: "/gestion_placas" },
      ],
    });
    const router = useRouter();

    return {
      data,

    };
  },
};
</script>