<template>
  <div class="container mx-auto p-6">
    <div class="card">
      <h1 class="text-2xl font-bold mb-4">Acciones</h1>
      <div class="buttons-container">
        <button class="btn btn-primary" @click="agregar">Agregar</button>
        <button class="btn btn-secondary" @click="modificar">Modificar</button>
        <button class="btn btn-danger" @click="eliminar">Eliminar</button>
        <button class="btn btn-success" @click="consultar">Consultar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    agregar() {
      alert('Agregar funcionalidad no implementada aún.');
    },
    modificar() {
      alert('Modificar funcionalidad no implementada aún.');
    },
    eliminar() {
      alert('Eliminar funcionalidad no implementada aún.');
    },
    consultar() {
      alert('Consultar funcionalidad no implementada aún.');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #f3f4f6;
  border-radius: 8px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}
</style>