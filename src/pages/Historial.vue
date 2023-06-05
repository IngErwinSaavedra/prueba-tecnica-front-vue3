<template>
  <Sidebar />
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "Historial",
  components: {
    Sidebar,
  },
};
</script>
<style>
main {
  margin-left: 200px; /* Ajusta el margen para dejar espacio para la barra lateral */
}
</style>