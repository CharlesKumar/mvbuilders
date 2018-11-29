<template>
  <div id="app" >
    <header class="flex flex-jcsa z-1">
      <div id="brand">
        <img src="@/assets/mvlogo.png" alt="" id="logo"><h3 class="inline-block times vat ttu">Builders</h3>
      </div>
      <nav class="main-nav">
        <button id="mm-toggle" class="btn mm-toggle burger"></button>
        <ul id="nav-roller" class="nav-container">
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/about">About</router-link></li>
          <li class="nav-item"><router-link to="/project">Projects</router-link></li>
          <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
          <!-- <li class="nav-item"><a href=""></a></li>
          <li class="nav-item"><a href=""></a></li> -->
        </ul>
      </nav>
    </header>
    <router-view class="mh-100v" />
    <footer>
      <div class="row">
        <div class="col-md3">
          <h4>Contact</h4>
          <div><img src="@/assets/smartphone-ringing.svg" alt="" class="icon-xsmall mr2"> <a class="c-white" href="tel:+919842430871">9842430871</a></div>
          <div><img src="@/assets/envelope.svg" alt="" class="icon-xsmall mr2"> <a class="c-white" href="mailto:murlidhar28@gmail.com">murlidhar28@gmail.com</a></div>
        </div>
        <div class="col-md3">
          <p>Quick links</p>
          <ul class="list-reset m0 p0">
            <li class="nav-item"><router-link to="/">Home</router-link></li>
            <li class="nav-item"><router-link to="/about">About</router-link></li>
            <li class="nav-item"><router-link to="/project">Projects</router-link></li>
            <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md3">
          <!-- <h4>About</h4>
          <p><span class="times ttu">MV Builders</span> </p> -->
          <h5>Member of <span class="ttu">credai</span></h5>
          <img src="@/assets/credai.png" alt="" class="mw-100" style="width: 240px;">
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

[v-cloak] > * {
  display: none;
}

[v-cloak]::before {
  content: "loading…";
}
</style>
