<template>
  <div id="app" >
    <header class="flex flex-jcsa z-1">
      <div id="brand" class="flex flex-jcsb">
        <div><div class="flex flex-aic">
          <img src="@/assets/mvlogo.png" class="ml2" alt="" id="logo">
          <h3 class="times ml1 ttu">Builders</h3>
        </div>
        <span id="sbs" style="display: block;">Building Happy Homes</span>
      </div>
        <button id="mm-toggle" class="btn mm-toggle burger"></button>
      </div>
      <nav class="main-nav">
        <ul id="nav-roller" class="nav-container">
          <li class="nav-item"><router-link @click.native="$scrollToTop" to="/">Home</router-link></li>
          <li class="nav-item"><router-link @click.native="$scrollToTop" to="/about">About</router-link></li>
          <li class="nav-item"><router-link @click.native="$scrollToTop" to="/project">Projects</router-link></li>
          <li class="nav-item"><router-link @click.native="$scrollToTop" :to="{path: 'contact'}">Contact</router-link></li>
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
          <div><img src="@/assets/smartphone-ringing.svg" alt="" class="icon-xsmall mr2"> <a class="c-white vat" href="tel:+919842430871">+91 9842430871</a></div>
          <div><img src="@/assets/envelope.svg" alt="" class="icon-xsmall mr2"> <a class="c-white vat" href="mailto:murlidhar28@gmail.com">murlidhar28@gmail.com</a></div>
        </div>
        <div class="col-md3">
          <p>Quick links</p>
          <ul class="list-reset m0 p0">
            <li class="nav-item"><router-link @click.native="$scrollToTop" to="/">Home</router-link></li>
            <li class="nav-item"><router-link @click.native="$scrollToTop" to="/about">About</router-link></li>
            <li class="nav-item"><router-link @click.native="$scrollToTop" to="/project">Projects</router-link></li>
            <li class="nav-item"><router-link @click.native="$scrollToTop" to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-md3">
          <!-- <h4>About</h4>
          <p><span class="times ttu">MV Builders</span> </p> -->
          <h5>Member</h5>
          <img src="@/assets/credai.png" alt="" class="mw-100" style="width: 240px;">
        </div>
      </div>
      <p class="m0 p2">&copy; 2018 - Crayola Design Studio</p>
      <button id="scroll-top">Top</button>
    </footer>
  </div>
</template>

<style lang="scss">
@import "sass/style";

#scroll-top {
  position: fixed;
  opacity: 0.5;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#sbs {
  position: relative;
  left: 70px;
  top: -10px;
}

@media all and (max-width: 768px) {
  #sbs {
    left: 45px;
  }
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

footer .nav-item a {
  color: white;
}

footer .nav-item a:visited {
  color: lightblue;
}
</style>
