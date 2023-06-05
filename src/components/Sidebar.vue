<template>
  <aside class="sidebar">
    <div class="list-group">
      <router-link
        to="/home"
        class="list-group-item"
        active-class="active"
        exact
      >
        Home
      </router-link>
      <router-link
        to="/convertidor"
        class="list-group-item"
        active-class="active"
        exact
      >
        Convertidor
      </router-link>
      <router-link
        to="/historial"
        class="list-group-item"
        active-class="active"
        exact
      >
        Historial
      </router-link>
      <router-link to="/login" v-slot="{ navigate }">
        <a @click="cerrarSesion, navigate()"> Cerrar Sesión </a>
      </router-link>
    </div>
  </aside>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const cerrarSesion = async (event) => {
      localStorage.removeItem("token");
      router.push("/");
    };
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: #333;
  color: #fff;
}

.sidebar .list-group {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
}

.sidebar .list-group-item {
  color: #fff;
  background-color: #333;
  border: none;
  margin-bottom: 10px;
}

.sidebar .list-group-item.active {
  background-color: #555;
}
</style>