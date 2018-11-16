<template>
  <div id="app" >
    <header class="flex flex-jcsa z-1">
      <div id="brand">
        <h3>MV Builders</h3>
      </div>
      <nav class="main-nav">
        <button id="mm-toggle" class="btn mm-toggle">Menu</button>
        <ul id="nav-roller" class="nav-container">
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/about">About</router-link></li>
          <!-- <li class="nav-item"><a href=""></a></li>
          <li class="nav-item"><a href=""></a></li> -->
        </ul>
      </nav>
    </header>
    <router-view class="mh-100v" />
    <footer>
      <div class="row">
        <div class="col-md3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quos, nulla. Distinctio laudantium fugiat dolore, aliquid nobis voluptates sunt! Fugit nesciunt, explicabo autem facilis quod molestiae asperiores odit. Non, modi.
        </div>
        <div class="col-md3">
          <p>footer links goes here</p>
        </div>
        <div class="col-md3">
          <h4>About</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat accusantium aliquam veniam tempore ea delectus aliquid dolores laudantium, impedit repudiandae expedita architecto, vero quisquam odio vel? Nemo, impedit cupiditate repellat.</p>
        </div>
      </div>
      <p class="m0 p2">&copy; 2018 - Crayola Design Studio</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import "sass/style";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.top--adjust {
  position: relative;
  top: 80px;
}
</style>
