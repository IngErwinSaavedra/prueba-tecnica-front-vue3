<template>
  <div style="margin-left: 200px">
    <label>Monto Conversión (UF):</label>
    <input v-model="ufAmount" type="number" />
    <label>Fecha Conversión:</label>
    <input v-model="conversionDate" type="date" />
    <button type="button" class="btn btn-success" @click="convertir">
      Convertir
    </button>

    <div v-if="conversionResult">
      <p>Monto Conversión: {{ ufAmount }} UF</p>
      <p>Fecha Conversión: {{ conversionDate }}</p>
      <p>Valor moneda: {{ valorMoneda }} CLP</p>
      <p>Monto: {{ conversionResult }} CLP</p>
    </div>
  </div>
  <Sidebar />
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import axios from "axios";
export default {
  data() {
    return {
      ufAmount: 0,
      conversionDate: "",
      conversionResult: null,
      valorMoneda: null,
    };
  },
  name: "Convertidor",
  components: {
    Sidebar,
  },
  methods: {
    convertir() {
      const apiUrl = `https://mindicador.cl/api/uf/${this.formatDate(
        this.conversionDate
      )}`;
      axios
        .get(apiUrl)
        .then((response) => {
          const ufValue = response.data.serie[0].valor;
          this.valorMoneda = ufValue;
          this.conversionResult = this.ufAmount * ufValue;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    formatDate(date) {
      const [year, month, day] = date.split("-");
      return `${day}-${month}-${year}`;
    },
  },
};
</script>
<style>
main {
  margin-left: 200px; /* Ajusta el margen para dejar espacio para la barra lateral */
}
</style>