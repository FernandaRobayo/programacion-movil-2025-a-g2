<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="danger">
        <ion-buttons> <ion-button @click="goToMenu">
            <ion-icon :icon="arrowBackOutline" color="light" size="large"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Carrito de Compras</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="cart.length > 0" class="cart-items-container">
        <div v-for="(item, index) in cart" :key="item.id" class="cart-item-card">
          <div class="item-details">
            <h2 class="item-name">{{ item.name }}</h2>
            <div class="quantity-controls">
              <ion-button fill="clear" @click="decreaseQuantity(item)" class="quantity-button decrease">
                <ion-icon :icon="removeOutline"></ion-icon>
              </ion-button>
              <span class="item-quantity">{{ item.quantity }}</span>
              <ion-button fill="clear" @click="increaseQuantity(item)" class="quantity-button increase">
                <ion-icon :icon="addOutline"></ion-icon>
              </ion-button>
            </div>
          </div>
          <div class="item-price-remove">
            <span class="item-price" v-if="!isNaN(Number(item.price))">{{ formatCurrency(Number(item.price) * item.quantity) }}</span>
            <span v-else style="color: red; font-weight: bold;">PRECIO INVÁLIDO</span>
            <ion-button fill="clear" color="danger" @click="removeFromCart(index)" class="remove-button">
              <ion-icon :icon="trashOutline" size="large"></ion-icon>
            </ion-button>
          </div>
        </div>

        <div class="order-summary">
          <h3>Resumen del Pedido:</h3>
          <div v-for="item in cart" :key="item.id" class="summary-item">
            <span>{{ item.name }} x {{ item.quantity }}</span>
            <span v-if="isNaN(Number(item.price))" style="color: red; font-weight: bold;">PRECIO INVÁLIDO</span>
            <span v-else>{{ formatCurrency(Number(item.price) * item.quantity) }}</span>
          </div>
          <div class="total-container">
            <p class="total-label">Total a pagar:</p>
            <p class="total-price">{{ formatCurrency(cartTotal) }}</p>
            <span v-if="isNaN(cartTotal)" style="color: red; font-weight: bold;">TOTAL INVÁLIDO</span>
          </div>
        </div>

        <ion-button @click="goToFinalizarCompra" expand="full" color="danger" class="confirm-order-button">
          <ion-icon :icon="checkmarkOutline"></ion-icon>
          Confirmar mi pedido
        </ion-button>
      </div>
      <div v-else class="empty-cart">
        <ion-icon :icon="cartOutline" size="large"></ion-icon>
        <p>El carrito está vacío.</p>
        <ion-button @click="goToMenu" expand="full" color="primary">
            Ir al Menú
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { cart, removeFromCart, cartTotal, increaseCartItemQuantity, decreaseCartItemQuantity } from '@/state/cartState.js';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonIcon,
  IonButtons,
} from '@ionic/vue';
import { trashOutline, arrowBackOutline, cartOutline, checkmarkOutline, addOutline, removeOutline } from 'ionicons/icons';

const router = useRouter();

const formatCurrency = (value) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  })
    .format(value)
    .replace('COP', '')
    .trim();
};

const goToMenu = () => {
  router.push('/tabs/menu');
};

const goToFinalizarCompra = () => {
  console.log('goToFinalizarCompra function called');
  router.push('/finalizar-compra');
};

const increaseQuantity = (item) => {
  increaseCartItemQuantity(item);
};

const decreaseQuantity = (item) => {
  decreaseCartItemQuantity(item);
};
</script>
<style scoped>
.cart-items-container {
  padding: 16px;
}

.cart-item-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #ddd;
}

.cart-item-card:last-child {
  border-bottom: none;
}

.item-details {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espacio entre nombre y controles */
}

.item-name {
  font-weight: bold;
  margin-bottom: 4px;
  margin-right: 8px; /* Espacio del control de cantidad */
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls .quantity-button {
  position: relative;
  padding: 0;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent; /* Evita el highlight al tocar en iOS */
}

.quantity-controls .quantity-button::before {
  color: red;
  font-size: 1.8em;
  line-height: 1;
}

.quantity-controls .decrease::before {
  content: "-";
}

.quantity-controls .increase::before {
  content: "+";
}

.item-quantity {
  color: #777;
  margin: 0 1em;
  font-size: 1.1em;
}

.remove-button {
  --padding-start: 8px;
  --padding-end: 0;
}

.order-summary {
  margin-top: 20px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.total-container {
  margin-top: 16px;
  padding-top: 8px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.total-label {
  font-size: 1.1em;
}

.total-price {
  font-size: 1.1em;
  color: var(--ion-color-danger);
}

.confirm-order-button {
  margin-top: 24px;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  color: #777;
}

.empty-cart ion-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.empty-cart p {
  font-size: 1.1em;
}
</style>