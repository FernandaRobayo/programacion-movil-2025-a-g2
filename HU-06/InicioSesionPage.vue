<template>
  <ion-page>
    <div class="login-container">
      <div class="logo-container">
        <h1 class="cooper-black">Pizza Boom</h1>
      </div>
      <div class="login-card">
        <h2 class="welcome-text cooper-black">Bienvenido a Pizza Boom</h2>
        <form @submit.prevent="iniciarSesion">
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <ion-button expand="full" type="submit" class="login-button-delicate">
            Iniciar Sesión
          </ion-button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p class="forgot-password-link">
          <span @click="irOlvideContrasena" class="forgot-password-text">Olvidé mi contraseña</span>
        </p>
        <p class="create-account-link">
          ¿No tienes cuenta? <span @click="irCrearCuenta" class="create-account-text">Crea una aquí</span>
        </p>
      </div>
    </div>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonButton, toastController } from '@ionic/vue';
import axios from 'axios';

const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const irOlvideContrasena = () => {
  router.push({ name: 'recuperarContrasena' });
};

const irCrearCuenta = () => {
  router.push('/crear-cuenta');
};

const iniciarSesion = async () => {
  errorMessage.value = '';

  try {
    // const response = await axios.post('http://localhost:3001/api/auth/login', {
    const response = await axios.post('https://p5xf6ngj-3001.use.devtunnels.ms/api/auth/login', {
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) {
      const userData = response.data;

      const profileDataToSave = {
        nombre: userData.nombre,
        email: userData.email,
        telefono: userData.telefono,
        direccion: userData.direccion,
      };
      localStorage.setItem('userData', JSON.stringify(profileDataToSave));

      const toast = await toastController.create({
        message: '¡Inicio de sesión exitoso! Redirigiendo al menú.',
        duration: 2000,
        position: 'top',
        color: 'success',
      });
      await toast.present();

      router.push('/tabs/menu');
    } else {
      errorMessage.value = 'Ocurrió un error inesperado al iniciar sesión.';
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage.value = 'Credenciales incorrectas. Verifica tu email y contraseña.';
      } else if (error.response.status === 400) {
        errorMessage.value = error.response.data.error || 'Datos de solicitud inválidos.';
      } else {
        errorMessage.value = 'Error del servidor: ' + (error.response.data.message || error.response.statusText);
      }
    } else if (error.request) {
      errorMessage.value = 'No se pudo conectar con el servidor. Verifica tu conexión o que el backend esté activo.';
    } else {
      errorMessage.value = 'Error al preparar la solicitud de inicio de sesión.';
    }

    const toast = await toastController.create({
      message: errorMessage.value,
      duration: 3000,
      position: 'top',
      color: 'danger',
    });
    await toast.present();
  }
};
</script>

<style scoped>
.login-container {
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
}

.logo-container {
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  order: 0;
}

.logo-container h1 {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'Arial Black', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.login-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  order: 1;
  margin-top: 0;
}

.welcome-text {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 2rem;
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

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
}

.login-button-delicate {
  --background: #e53935; /* Rojo vivo */
  --color: #ffffff;       /* Texto blanco */
  --border-radius: 999px; /* Bordes redondos tipo pastilla */
  --padding-start: 20px;
  --padding-end: 20px;
  --padding-top: 10px;
  --padding-bottom: 10px;
  font-weight: bold;
  font-size: 1rem;
  text-transform: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra sutil */
  width: fit-content; /* Ajusta al contenido */
  align-self: center; /* Centrado horizontal */
  margin-top: 1.5rem;
  transition: all 0.2s ease-in-out;
}

.login-button-delicate:hover {
  --background: #c62828; /* Rojo más oscuro al pasar el mouse */
  transform: scale(1.03); /* Efecto sutil de agrandamiento */
}


.error-message {
  color: #ae0101;
  font-size: 1rem;
  margin-top: 1rem;
}

.forgot-password-link,
.create-account-link {
  margin-top: 1rem;
  font-size: 1rem;
  color: #555;
  text-align: center;
}

.forgot-password-text,
.create-account-text {
  color: #ae0101;
  text-decoration: none;
  cursor: pointer;
}

.forgot-password-text:hover,
.create-account-text:hover {
  text-decoration: underline;
}
</style>