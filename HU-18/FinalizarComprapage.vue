<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button default-href="/carrito"></ion-back-button>
        </ion-buttons>
        <ion-title>Finalizar Compra</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="checkout-container" :key="$route.fullPath">
        <div class="form-container" v-if="cartItems.length > 0">
          <div class="form-group" :class="{ 'invalid': !formData.nombre }">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" v-model="formData.nombre" />
          </div>
          <div class="form-group" :class="{ 'invalid': !formData.direccion }">
            <label for="direccion">Dirección:</label>
            <input type="text" id="direccion" v-model="formData.direccion" />
          </div>
          <div class="form-group" :class="{ 'invalid': !formData.telefono }">
            <label for="telefono">Teléfono:</label>
            <input type="tel" id="telefono" v-model="formData.telefono" />
          </div>
          <div class="form-group" :class="{ 'invalid': !formData.email }">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="formData.email" />
          </div>
          <div class="form-group" :class="{ 'invalid': !formData.metodoPago }">
            <label for="metodoPago">Método de Pago:</label>
            <select id="metodoPago" v-model="formData.metodoPago">
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta de Crédito</option>
              <option value="transferencia">Transferencia Bancaria</option>
            </select>
          </div>

          <div class="order-summary">
            <h2>Resumen del Pedido</h2>
            <div v-for="(item, index) in cartItems" :key="index" class="order-item">
              <p>{{ item.name }} - {{ formatCOP(item.price) }} x {{ item.quantity || 1 }}</p>
            </div>
            <p class="total">Total: {{ formatCOP(total) }}</p>
          </div>

          <button
            @click="confirmarPedido"
            class="confirm-button"
            :disabled="!formData.nombre || !formData.direccion || !formData.telefono || !formData.email || !formData.metodoPago"
          >
            Confirmar Pedido
          </button>
        </div>
        <div v-else class="empty-cart">
          <p>Tu carrito está vacío.</p>
        </div>
        <div v-if="pedidoConfirmado" class="confirmation-message">
          <p>Su pedido ha sido tomado y será entregado en breve. ¡Gracias por su compra!</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
} from '@ionic/vue';
import { cart, cartTotal } from '@/state/cartState';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

const formData = ref({
  nombre: '',
  direccion: '',
  telefono: '',
  email: '',
  metodoPago: 'efectivo',
});

const pedidoConfirmado = ref(false);

onMounted(() => {
  console.log('FinalizarCompraPage: Mounted');
});

onUnmounted(() => {
  console.log('FinalizarCompraPage: Unmounted');
});

const cartItems = computed(() => cart.value);
const total = computed(() => cartTotal.value);

function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Usa la variable de entorno para la URL base (defínela en tu .env)
const API_BASE_URL = process.env.VUE_APP_API_URL || 'https://localhost:3001/api';

const confirmarPedido = async () => {
  if (
    !formData.value.nombre ||
    !formData.value.direccion ||
    !formData.value.telefono ||
    !formData.value.email ||
    !formData.value.metodoPago
  ) {
    alert('Por favor, completa todos los campos antes de confirmar el pedido.');
    return;
  }

  try {
    const resumenPedidoParaBackend = cartItems.value.map(item => ({
      nombre: item.name,
      cantidad: item.quantity || 1,
      precio_unitario: item.price
    }));

    const dataToSend = {
      nombre: formData.value.nombre,
      telefono: formData.value.telefono,
      direccion: formData.value.direccion,
      resumen_pedido: resumenPedidoParaBackend,
      metodo_pago: formData.value.metodoPago,
      email: formData.value.email,
    };

    console.log("Datos que se enviarán al backend:", dataToSend);

    const response = await axios.post(`${API_BASE_URL}/pedidos`, dataToSend);

    if (response.status === 200 || response.status === 201) {
      console.log('Respuesta exitosa del backend:', response.data);
      pedidoConfirmado.value = true;
      cart.value = [];
      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
      alert('¡Pedido confirmado y enviado con éxito!');

      setTimeout(() => {
        console.log('FinalizarCompraPage: Redireccionando a /tabs/menu después de confirmación');
        router.replace('/tabs/menu');
      }, 3000);
    } else {
      console.error('Error en la respuesta del backend:', response.data);
      alert(response.data.error || 'Hubo un error al procesar su pedido. Intente de nuevo.');
    }

  } catch (error) {
    console.error('Error al enviar el pedido al backend:', error);

    if (error.response) {
      console.error('Datos del error del servidor:', error.response.data);
      console.error('Estado HTTP:', error.response.status);
      alert(error.response.data.error || 'Error del servidor al confirmar el pedido. Verifique los datos.');
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor. Posible problema de CORS o el servidor no está funcionando:', error.request);
      alert('No se pudo conectar con el servidor. Por favor, asegúrese de que el servidor esté funcionando y revise la configuración de CORS.');
    } else {
      console.error('Error de configuración de la solicitud:', error.message);
      alert('Error interno al preparar el pedido.');
    }
  }
};
</script>

<style scoped>
/* Tus estilos CSS existentes */
.checkout-container {
  padding: 16px;
  max-width: 600px;
  margin: 0 auto;
}

.form-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group select {
  width: calc(100% - 20px); /* Ajustado para padding */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
}

.form-group.invalid input,
.form-group.invalid select {
  border-color: var(--ion-color-danger);
}

.order-summary {
  margin-top: 25px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.order-summary h2 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #333;
}

.order-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.95em;
  color: #555;
}

.total {
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 15px;
  text-align: right;
  color: var(--ion-color-danger);
}

.confirm-button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 25px;
  background-color: var(--ion-color-danger);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.confirm-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.confirm-button:hover:not(:disabled) {
  background-color: var(--ion-color-danger-shade);
}

.empty-cart {
  text-align: center;
  padding: 50px 0;
  color: #777;
  font-size: 1.1em;
}

.confirmation-message {
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  background-color: #e6ffe6;
  border: 1px solid #a3e6a3;
  border-radius: 8px;
  color: #28a745;
  font-weight: bold;
}
</style>