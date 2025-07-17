<template>
    <div class="container">
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
      <router-link to="/login">¿Ya tienes cuenta? Inicia sesión</router-link>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
    padding-top: 50px;
    text-align: center;
  }
  input {
    display: block;
    margin: 10px auto;
    padding: 8px;
    width: 100%;
  }
  button {
    margin-top: 10px;
  }
  </style>
  