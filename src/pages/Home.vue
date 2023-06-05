<template>
  <Sidebar />
  <Navbar />
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
<style>
main {
  margin-left: 200px; /* Ajusta el margen para dejar espacio para la barra lateral */
}
</style>
