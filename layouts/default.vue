<template>
  <div id="main">
    <nav class="navbar">
      <span class="navbar-toggle" id="js-navbar-toggle">
        <i class="fas fa-bars"></i>
      </span>
      <div class="logo">
        <nuxt-link to="/"><img :src="require('~/assets/images/logo_wigar.png')" alt="Women In Games Argentina logo"/></nuxt-link>
      </div>
      <ul class="main-nav" id="js-menu">
        <li>
          <a href="#" class="nav-links">Inicio</a>
        </li>
        <li>
          <a href="#" class="nav-links">Nosotras</a>
        </li>
        <li>
          <a href="#" class="nav-links">Juegos</a>
        </li>
        <li>
          <a href="#" class="nav-links">Eventos</a>
        </li>
        <li>
          <a href="#" class="nav-links">FAQ</a>
        </li>
        <li>
          <a href="#" class="nav-links">Contacto</a>
        </li>
      </ul>
    </nav>
    <Nuxt />
  </div>
</template>
<style scoped>
*,
body,
#main {
  padding: 0;
  margin: 0;
  border: none;
  text-decoration: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  color: #43358b;
}

body {
  margin: 0px;
  font-size: 8px;
  font-family: "Roboto", sans-serif;
}

.navbar {
  font-size: 18px;
  background-color: #e4097f;
  padding-bottom: 10px;
}

.main-nav {
  list-style-type: none;
  display: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.nav-links {
  color: #fff;
  padding: 1rem;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.main-nav li {
  text-align: center;
  font-size: 1.5rem;
  margin: 0 2rem;
}

.logo img {
  font-size: 1.5rem;
  margin-top: 10px;
  margin-left: 20px;
  height: 3.5rem;
}

.navbar-toggle {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  height: 8rem;
  z-index: 3;
  padding: 0 50px;
}

.active {
  display: block;
}

@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }

  .main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }

  .logo {
    margin-top: 0;
  }

  .navbar-toggle {
    display: none;
  }

  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }
}
</style>
<script></script>
