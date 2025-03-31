<!-- filepath: c:\Users\lagun\Documents\Vue\taller\src\views\ProveedorPage.vue -->
<template>
  <div class="container mx-auto p-6 shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Lista de Proveedores</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <thead>
          <tr class="bg-green-700 text-white text-lg">
            <th class="p-4">Nombre</th>
            <th class="p-4">Apellido</th>
            <th class="p-4">Documento</th>
            <th class="p-4">Fecha de Nacimiento</th>
            <th class="p-4">Dirección</th>
            <th class="p-4">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="proveedor in proveedores" 
            :key="proveedor.documento" 
            class="border-b text-gray-700 text-center hover:bg-green-100 transition duration-300"
          >
            <td class="p-4">{{ proveedor.nombre || "No disponible" }}</td>
            <td class="p-4">{{ proveedor.apellido || "No disponible" }}</td>
            <td class="p-4">{{ proveedor.documento || "No disponible" }}</td>
            <td class="p-4">{{ proveedor.fechaNacimiento || "No disponible" }}</td>
            <td class="p-4">{{ proveedor.direccion || "No disponible" }}</td>
            <td class="p-4">{{ proveedor.telefono || "No disponible" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseData } from '../Components/BaseData.js';

const proveedores = ref(BaseData.proveedores);
</script>

<style scoped>
.container {
  max-width: 900px;
  background: #d4edda; /* Verde claro */
  border-radius: 12px;
  padding: 30px;
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

table {
  border-collapse: collapse;
  width: 100%;
}
</style>