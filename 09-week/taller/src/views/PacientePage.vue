<!-- filepath: c:\Users\lagun\Documents\Vue\taller\src\views\Recepcionistapage.vue -->
<template>
  <div class="container mx-auto p-6 shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Lista de Pacientes</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <thead>
          <tr class="bg-blue-500 text-white text-lg">
            <th class="p-4">Nombre</th>
            <th class="p-4">Apellido</th>
            <th class="p-4">Edad</th>
            <th class="p-4">Correo</th>
            <th class="p-4">Horario Laboral</th>
            <th class="p-4">Extensión Telefónica</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="recepcionista in recepcionistas" 
            :key="recepcionista.id" 
            class="border-b text-gray-700 text-center hover:bg-blue-100 transition duration-300"
          >
            <td class="p-4">{{ recepcionista.nombre }}</td>
            <td class="p-4">{{ recepcionista.apellido }}</td>
            <td class="p-4">{{ recepcionista.edad }}</td>
            <td class="p-4">{{ recepcionista.correo }}</td>
            <td class="p-4">{{ recepcionista.horarioLaboral }}</td>
            <td class="p-4">{{ recepcionista.extensionTelefonica }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseData } from '../Components/BaseData.js';

const recepcionistas = ref(BaseData.recepcionistas);
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