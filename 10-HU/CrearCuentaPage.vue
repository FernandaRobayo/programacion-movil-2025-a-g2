<template>
  <ion-page>
    <div class="register-container">
      <div class="logo-container">
        <h1 class="cooper-black">Pizza Boom</h1>
      </div>
      <div class="register-card">
        <h2 class="register-text cooper-black">Crea tu cuenta de Pizza Boom</h2>
        <form @submit.prevent="registrarUsuario">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre" required>
          </div>
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" v-model="telefono" required>
          </div>
          <div class="form-group">
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" v-model="direccion" required>
          </div>
          <button type="submit" class="register-button">Registrar</button>
        </form>
      </div>
    </div>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage } from '@ionic/vue';
import axios from 'axios';

const router = useRouter();

const nombre = ref('');
const email = ref('');
const password = ref('');
const telefono = ref('');
const direccion = ref('');

// URL base configurable
const API_BASE_URL = process.env.VUE_APP_API_URL || 'https://localhost:3001/api';

const registrarUsuario = async () => {
  if (!nombre.value || !email.value || !password.value || !telefono.value || !direccion.value) {
    alert('Por favor, completa todos los campos antes de continuar.');
    return;
  }

  const userData = {
    nombre: nombre.value,
    email: email.value,
    password: password.value,
    telefono: telefono.value,
    direccion: direccion.value,
  };

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);

    if (response.status === 201) {
      alert('¡Cuenta creada exitosamente! Ahora puedes ver tu perfil.');

      // Guarda los datos del perfil en localStorage para que Perfil.vue pueda leerlos
      const profileDataToSave = {
        nombre: nombre.value,
        email: email.value,
        telefono: telefono.value,
        direccion: direccion.value,
      };
      localStorage.setItem('userData', JSON.stringify(profileDataToSave));

      // Redirige a la página de menú
      router.push('/tabs/menu');
    } else {
      alert(response.data.error || 'Ocurrió un error al registrar. Intenta de nuevo.');
    }
  } catch (error) {
    console.error('Error al registrar usuario:', error);

    if (error.response) {
      if (error.response.status === 409) {
        alert('Este correo electrónico ya está registrado. Por favor, usa otro o inicia sesión.');
      } else if (error.response.status === 400) {
        alert(error.response.data.error || 'Datos incompletos o incorrectos.');
      } else {
        alert('Error del servidor al registrar. Intenta de nuevo.');
      }
    } else if (error.request) {
      alert('No se pudo conectar con el servidor. Asegúrese de que el backend esté funcionando y revise la configuración de CORS.');
    } else {
      alert('Error interno al preparar el registro.');
    }
  }
};
</script>

<style scoped></style>
<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-image: url('@/assets/img/pizaaa.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

.logo-container {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.logo-container h1 {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'Arial Black', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.register-card {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: calc(100% - 3rem);
  max-width: 420px;
  margin: 1rem auto;
  box-sizing: border-box;
}

.register-text {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: 'Cooper Black', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 1.5rem;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  text-align: left;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}

.register-button {
  background-color: #dc2626;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.2s ease-in-out;
  margin-top: 1.5rem;
}

.register-button:hover {
  background-color: #b01a1a;
}

.cooper-black {
  font-family: 'Cooper Black', sans-serif;
}
</style>