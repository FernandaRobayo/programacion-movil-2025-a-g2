<template>
  <ion-page>
    <div class="fullscreen-bg" :class="{ 'hidden-bg': isNavigating }"></div>
    <div class="content" :style="{ 'opacity': isNavigating ? 0 : 1, 'transition': 'opacity 0.3s ease-out' }">
      <div class="logo-container" :style="{ 'opacity': isNavigating ? 0 : 1, 'transition': 'opacity 0.3s ease-out' }">
        <h1>Pizza Bomm</h1>
      </div>
      <button
        @click="handleLoginClick"
        class="login-button"
        :style="{ 'opacity': isNavigating ? 0 : 1, 'transition': 'opacity 0.3s ease-out' }"
      >
        Iniciar Sesión
      </button>
      <p
        class="prueba"
        :style="{ 'opacity': isNavigating ? 0 : 1, 'transition': 'opacity 0.3s ease-out' }"
      >
        ¿No tienes cuenta?
        <span
          @click="handleRegisterClick"
          class="register-link"
          :style="{ 'opacity': isNavigating ? 0 : 1, 'transition': 'opacity 0.3s ease-out' }"
        >Regístrate aquí</span>
      </p>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { IonPage } from '@ionic/vue'; // ¡Asegúrate de importar IonPage!

const router = useRouter();
const isNavigating = ref(false);

const handleLoginClick = () => {
  console.log('Botón Iniciar Sesión clickeado');
  isNavigating.value = true; // Indica que estamos navegando
  // Espera un breve momento para que la opacidad comience a cambiar antes de navegar
  setTimeout(() => {
    router.push({ path: '/inicio-sesion' });
  }, 50);
};

const handleRegisterClick = () => {
  console.log('Enlace Regístrate aquí clickeado');
  isNavigating.value = true; // Indica que estamos navegando
  // Espera un breve momento para que la opacidad comience a cambiar antes de navegar
  setTimeout(() => {
    router.push({ path: '/crear-cuenta' });
  }, 50);
};
</script>

<style scoped>
/* Estilos para el fondo de pantalla completa */
.fullscreen-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/pizaaa.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  opacity: 0.8;
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out; /* Agrega una transición suave */
}

.fullscreen-bg.hidden-bg {
  opacity: 0;
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
  color: white;
  padding: 4rem 1rem 8rem;
  box-sizing: border-box;
}

.prueba {
  color: #ffffff;
  font-family: 'Acme', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.register-link {
  color: #aa0000;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.register-link:hover {
  text-decoration: underline;
}

.logo-container {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 3rem;
}

.logo-container h1 {
  font-size: 6rem;
  font-weight: bold;
  font-family: 'Cooper', serif;
  line-height: 1;
  margin: 0;
}

.login-button {
  background-color: #dc2626;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-family: 'Abel', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.15s ease-in-out;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.login-button:hover {
  background-color: #c82323;
}
</style>