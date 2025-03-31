<template>
  <div class="container mx-auto p-6 shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Lista de Clientes</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <thead>
          <tr class="bg-blue-500 text-white text-lg">
            <th class="p-4">Nombre</th>
            <th class="p-4">Apellido</th>
            <th class="p-4">Documento</th>
            <th class="p-4">Fecha de Nacimiento</th>
            <th class="p-4">Dirección</th>
            <th class="p-4">Teléfono</th>
            <th class="p-4">Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="client in clientes" 
            :key="client.documento" 
            class="border-b text-gray-700 text-center hover:bg-blue-100 transition duration-300"
          >
            <td class="p-4">{{ client.nombre }}</td>
            <td class="p-4">{{ client.apellido }}</td>
            <td class="p-4">{{ client.documento }}</td>
            <td class="p-4">{{ client.fechaNacimiento }}</td>
            <td class="p-4">{{ client.direccion }}</td>
            <td class="p-4">{{ client.telefono }}</td>
            <td class="p-4">{{ client.correo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseData } from '../Components/BaseData.js';

const clientes = ref(BaseData.clientes);
</script>

<style scoped>
.container {
  max-width: 1200px;
  background: #f0f8ff; /* Azul claro */
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

