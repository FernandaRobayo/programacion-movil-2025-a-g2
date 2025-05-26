<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="--background: #b01a1a; --color: white;">
        <ion-title
          style="padding: 0; margin: 0; width: 100%; text-align: center; font-size: 2.5rem; font-family: 'Cooper Black', sans-serif;"
        >Pizza Boom</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="menu-container">
        <div class="header">
          <div class="logo-container"></div>
          <div class="cart-container">
            <button @click="irAlCarrito" class="cart-button">
              🛒 Carrito ({{ cart.length }})
            </button>
          </div>
          <div class="search-container">
            <input
              type="text"
              placeholder="¿Qué hay para cenar hoy?"
              v-model="searchQuery"
              @input="handleSearch"
            />
            <button @click="handleSearch">Buscar</button>
          </div>
        </div>

        <div class="tab-bar">
          <button
            :class="{ 'tab-button': true, 'active': selectedCategory === 'Producto' }"
            @click="selectCategory('Producto')"
          >
            Productos
          </button>
          <button
            :class="{ 'tab-button': true, 'active': selectedCategory === 'Bebida' }"
            @click="selectCategory('Bebida')"
          >
            Bebidas
          </button>
          <button
            :class="{ 'tab-button': true, 'active': selectedCategory === 'Todas' }"
            @click="selectCategory('Todas')"
          >
            Todas
          </button>
        </div>

        <div class="product-grid" v-if="filteredProducts.length > 0">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            :class="['product-card', getProductClass(product.id)]"
          >
            <div class="product-image"></div>
            <div class="product-content">
              <h2 class="product-name">{{ product.name }}</h2>
              <p class="product-price">{{ formatCurrency(product.price) }}</p>
              <button class="add-to-cart-btn" @click="handleAddToCart(product)">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        <div v-else class="no-results">
          <p>No se encontraron productos para "{{ searchQuery }}" en la categoría "{{ selectedCategory }}"</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { cart, addToCart } from '@/state/cartState';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonPage } from '@ionic/vue';
import { getAllProducts } from '@/services/api';

const router = useRouter();
const searchQuery = ref('');
// CAMBIO 2: Valor inicial de la categoría seleccionada a 'Producto'
const selectedCategory = ref('Producto'); 
const products = ref([]);

onMounted(async () => {
  try {
    products.value = await getAllProducts();
    console.log('Productos cargados en onMounted:', products.value);
    console.log('Estado inicial del carrito:', cart.value);
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
});

const filteredProducts = computed(() => {
  console.log('Filtrando con categoría:', selectedCategory.value, 'y búsqueda:', searchQuery.value);
  return products.value.filter(product => {
    const searchMatch = !searchQuery.value || product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    // CAMBIO 3: La condición para la categoría ahora debe coincidir con 'Producto' o 'Bebida'
    const categoryMatch = selectedCategory.value === 'Todas' || product.category === selectedCategory.value;
    console.log('Producto:', product.name, 'Categoría:', product.category, 'searchMatch:', searchMatch, 'categoryMatch:', categoryMatch);
    return searchMatch && categoryMatch;
  });
});

const handleSearch = () => {
  console.log('Función handleSearch llamada. Texto de búsqueda:', searchQuery.value);
};

const selectCategory = (category) => {
  console.log('Función selectCategory llamada. Nueva categoría:', category);
  selectedCategory.value = category;
  console.log('Valor de selectedCategory después de la asignación:', selectedCategory.value);
};

// Formato de moneda COP
const formatCurrency = (price) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);

const handleAddToCart = (product) => {
  console.log('handleAddToCart llamado con el producto:', JSON.stringify(product));
  addToCart(product);
  console.log('Producto añadido al carrito:', cart.value);
  router.push('/carrito');
};

const irAlCarrito = () => {
  console.log('Botón irAlCarrito clickeado');
  router.push('/carrito');
};

const getProductClass = (productId) => {
  // Asegúrate de que las clases CSS de imagen sigan el ID de tus productos.
  // Es una buena práctica poner comentarios para recordar qué ID corresponde a qué imagen.
  switch (productId) {
    case 1: return 'product-pizza-1';      // Pizza Pepperoni
    case 2: return 'product-pizza-2';      // Pizza Hawaiana
    case 3: return 'product-pizza-3';      // Pizza Vegetariana
    case 4: return 'product-pizza-4';      // Pizza de Pollo BBQ
    case 5: return 'product-pizza-5';      // Lasaña de Carne
    case 6: return 'product-bebida-1';     // Limonada Cereza
    case 7: return 'product-bebida-2';     // Coca Cola
    case 8: return 'product-bebida-3';     // Soda Frutos Rojos
    default: return '';
  }
};

watch(searchQuery, (newValue) => {
  console.log('El valor de searchQuery ha cambiado a:', newValue);
});

watch(selectedCategory, (newValue) => {
  console.log('La categoría seleccionada ha cambiado a:', newValue);
});

watch(filteredProducts, (newValue) => {
  console.log('El array filteredProducts ha cambiado. Longitud:', newValue.length);
});
</script>

<style scoped>
/* Tus estilos CSS existentes */
.menu-container {
  padding: 16px;
  min-height: calc(100% - var(--ion-toolbar-height)); /* Asegura al menos la altura de la ventana menos la toolbar */
  padding-bottom: 56px; /* Espacio para la barra de navegación inferior (ajusta si es necesario) */
  box-sizing: border-box; /* Incluye el padding en el cálculo de la altura */
}

.header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.logo-container {
  /* Estilos del logo */
}

.cart-container {
  display: flex;
  justify-content: flex-end;
}

.cart-button {
  padding: 8px 15px;
  background-color: #b01a1a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-container {
  display: flex;
}

.search-container input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.search-container button {
  padding: 8px 15px;
  background-color: #b01a1a;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.tab-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
}

.tab-button.active {
  background-color: #b01a1a; /* Cambiado a rojo */
  color: white; /* Texto blanco para mejor contraste */
  font-weight: bold;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Aumentado el tamaño mínimo de las columnas */
  gap: 20px;
  padding-bottom: 20px; /* Añade un poco de espacio al final del grid */
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px; /* Añadido un poco de padding al contenedor del producto */
}

.product-image {
  background-size: cover;
  background-position: center;
  height: 180px; /* Aumentada la altura de la imagen */
}

.product-content {
  padding: 15px; /* Aumentado el padding del contenido */
  display: flex;
  flex-direction: column;
  gap: 8px; /* Aumentado el espacio entre los elementos del contenido */
  flex-grow: 1;
}

.product-name {
  font-weight: bold;
  margin: 0;
  font-size: 1.3rem; /* Aumentado el tamaño de la fuente del nombre */
}

.product-price {
  color: #b01a1a;
  font-weight: bold;
  font-size: 1.1rem; /* Aumentado el tamaño de la fuente del precio */
}

.add-to-cart-btn {
  background-color: #b01a1a;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px; /* Aumentado el padding del botón */
  cursor: pointer;
  margin-top: auto;
  font-size: 1rem; /* Aumentado el tamaño de la fuente del botón */
}

.no-results {
  text-align: center;
  color: #777;
}

/* Aquí, asegúrate de que los nombres de las clases CSS coincidan con los nombres de tus imágenes */
/* Y las imágenes de tus assets deben corresponder a los nombres de tus productos */

/* ... tus estilos CSS existentes ... */

.product-pizza-1 .product-image { /* ID 1: Pizza Pepperoni */
  background-image: url("../assets/img/pizzacarnesss.jpg"); /* O la imagen de Pepperoni */
}

.product-pizza-2 .product-image { /* ID 2: Pizza Hawaiana */
  background-image: url("../assets/img/pizza hawaiana.webp");
}

.product-pizza-3 .product-image { /* ID 3: Pizza Vegetariana */
  background-image: url("../assets/img/pizza vegetariana.jpg");
}

.product-pizza-4 .product-image { /* ID 4: Pizza de Pollo BBQ */
  background-image: url("../assets/img/pizzaBBQ.png"); /* Asegúrate de tener esta imagen */
}

.product-pizza-5 .product-image { /* ID 5: Lasaña */
  background-image: url("../assets/img/Lasaña.png"); /* Asegúrate de tener esta imagen */
}

.product-bebida-1 .product-image { /* ID 6: Limonada Cerezada */
  background-image: url("../assets/img/cerezada.webp");
}

.product-bebida-2 .product-image { /* ID 7: Coca Cola */
  background-image: url("../assets/img/coca cola.jpg");
}

.product-bebida-3 .product-image { /* ID 8: Soda Frutos Rojos */
  background-image: url("../assets/img/sodafrutosrojos.jpg");
}

</style>