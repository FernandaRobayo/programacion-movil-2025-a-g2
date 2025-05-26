<template>
  <ion-page>
    <div class="reset-password-container">
      <div class="logo-container">
        <h1 class="cooper-black">Pizza Boom</h1>
      </div>
      <div class="reset-password-card">
        <h2 class="reset-password-text cooper-black">Renovar Contraseña</h2>
        <form @submit.prevent="renovarContrasena">
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="newPassword">Nueva Contraseña:</label>
            <input type="password" id="newPassword" v-model="newPassword" required>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirmar Nueva Contraseña:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <button type="submit" class="reset-password-button">Renovar Contraseña</button>
        </form>
        <div v-if="mensaje" class="mensaje">
          {{ mensaje }}
        </div>
        <p class="ion-margin-top" style="text-align: center;">
          ¿Te equivocaste? <a href="#" @click.prevent="redirigirInicioSesion" class="volver-inicio-sesion">Volver a Iniciar Sesión</a>
        </p>
      </div>
    </div>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage } from '@ionic/vue';

const router = useRouter();
const email = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const mensaje = ref('');

const renovarContrasena = () => {
  console.log('Renovando contraseña con:', email.value, newPassword.value, confirmPassword.value);

  if (newPassword.value === confirmPassword.value) {
    mensaje.value = 'Contraseña renovada exitosamente!';
    setTimeout(() => {
      router.push('/inicio-sesion');
    }, 2000);
  } else {
    mensaje.value = 'Las contraseñas no coinciden.';
  }
};

const redirigirInicioSesion = () => {
  router.push('/inicio-sesion');
};
</script>

<style scoped>
/* Estilos CSS específicos para este componente */
.reset-password-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-image: url('@/assets/img/pizaaa.png'); /* Ruta a la imagen de fondo */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
}

.logo-container {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
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

.reset-password-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  order: 1;
  margin-top: 0;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.reset-password-text {
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

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
}

.reset-password-button {
  background-color: #dc2626;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.2s ease-in-out;
  margin-top: 1rem;
}

.reset-password-button:hover {
  background-color: #b01a1a;
}

.cooper-black {
  font-family: 'Cooper Black', sans-serif;
}

.mensaje {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  text-align: center;
}

/* Estilo para el enlace "Volver a Iniciar Sesión" */
.volver-inicio-sesion {
  color: rgb(162, 0, 0); /* Cambia 'white' al color que desees */
  text-decoration: none;
  font-weight: bold;
}

.volver-inicio-sesion:hover {
  text-decoration: underline;
}
</style>