<template>
  <div id="app" >
    <vueHeadroom>
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
    </vueHeadroom>
    <router-view class="mh-100v" />
    <footer class="pb3">
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
      <button id="scroll-top"><svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10" stroke-width="1" stroke="yellow"></path>
						</svg></button>
    </footer>
  </div>
</template>

<style lang="scss">
@import "sass/style";

.svg-icon {
  width: 3em;
  height: 3em;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
  // stroke-width: 4;
}

// .svg-icon circle {
//   stroke: #4691f6;
//   stroke-width: 2;
// }

#scroll-top {
  position: fixed;
  opacity: 0.7;
  background-color: black;
  bottom: 20px;
  right: 10px;
  padding: 5px;
  border: 0;
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
