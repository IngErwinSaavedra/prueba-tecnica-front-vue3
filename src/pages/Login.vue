<template>
  <div class="container">
    <form @submit="login">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="username"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");

    const login = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post(
          "http://localhost:3000/api/users/login",
          {
            username: username.value,
            password: password.value,
          }
        );

        // Aquí puedes procesar la respuesta del servidor
        // por ejemplo, almacenar el token de autenticación en el almacenamiento local y redireccionar al usuario
        localStorage.setItem("token", response.data.token);
        // Redireccionar al usuario a otra página
        router.push("/home");
      } catch (error) {
        console.log(error);
        // Manejar el error de autenticación, por ejemplo, mostrar un mensaje de error
      }
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>