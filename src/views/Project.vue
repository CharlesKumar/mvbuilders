<template lang="html">
  <div id="project-page">
    <div class="h-300 purple-bliss__gradient">
      <div class="c c-white flex flex-col flex-aic flex-jcc h-100p">
        <h2 class="times ttu">MV Builders</h2>
        <h5>Good Projects are the wealth of a Company</h5>
      </div>
    </div>
    <!-- <h1 class="c">List of Our Projects</h1> -->
    <!-- <h1 class="c">Our creations to make happy world</h1> -->
    <h1 class="c">Our creations for happy world</h1>
    <p class="c"><span>Happy to launch our new project in Boologa Vaikundam, Srirangam, have the entire people in the Universe have the ambition to live at their lifetime especially during their retired livinghoods. As our project situated very near to thayar sannadhi and the first project in srirangam having the mandatory registration with RERA numbered as 16/2018(verify) we hope MV Vistara will fulfill the ambitions of srirangam loving people spread over the entire Universe.</span></p>
    <div class="c">
      <h2 class="">Current Project:</h2>
      <div class="row c">
        <div class="col-md2">
          <img src="@/assets/MV2.jpg" alt="" class="mw-100">
        </div>
        <div class="col-md2">
            <h3>MV Vistara <small class="mono">defines itself</small></h3>
          <p>Happy to launch our new project in Boologa Vaikundam, Srirangam, have the entire people in the Universe have the ambition to live at their lifetime especially during their retired livinghoods. As our project situated very near to thayar sannadhi and the first project in srirangam having the mandatory registration with RERA numbered as 16/2018(verify) we hope MV Vistara will fulfill the ambitions of srirangam loving people spread over the entire Universe.</p>
          <h4>Location Advantages</h4>
          <ul class="list-checked">
            <li>700 Meter from Srirangam Thayar Sannadhi.</li>
            <li>Lush Green Environment</li>
            <li>2km from Bus Stand/Railway Station.</li>
            <li>3km from Government Butterfly Park.</li>
          </ul>
        </div>
      </div>
      <h2 class="hero-margin">Completed Projects</h2>
      <div class="accordion hero-margin">
        <div class="accordion-set">
          <h3 class="accordion-title mb3 mt3">Project 1 - 2015</h3>
          <div class="accordion-data h-show">
            <img src="https://source.unsplash.com/1200x400?building" alt="" class="mw-100">
            <h4 class="mb3 mt3">Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ratione dignissimos eum quidem illo fuga quia. Eum quisquam, sint eveniet, excepturi vero obcaecati libero magnam, consequuntur recusandae aspernatur dolore iure!</p>
          </div>
        </div>
        <div class="accordion-set">
          <h3 class="accordion-title mb3 mt3">Project 2 - 2013</h3>
          <div class="accordion-data">
            <img src="https://source.unsplash.com/1201x400?building" alt="" class="mw-100">
              <h4 class="mb3 mt3">Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non delectus iure recusandae ea, ex necessitatibus facere rerum blanditiis. Repellendus, non qui labore. Nobis possimus porro necessitatibus sed ea perspiciatis corporis.</p>
          </div>
        </div>
        <div class="accordion-set">
          <h3 class="accordion-title mb3 mt3">Project 3 - 2011</h3>
          <div class="accordion-data">
            <img src="https://source.unsplash.com/1202x400?building" alt="" class="mw-100">
              <h4 class="mb3 mt3">Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae natus, itaque est modi accusantium eum voluptatibus harum laboriosam voluptates quis ducimus architecto dolorum ipsum ex! Rem ex, adipisci provident porro.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  mounted() {
    let accordionTriggers = document.querySelectorAll(
      ".accordion .accordion-set h3"
    );

    for (let i = 0; i < accordionTriggers.length; i++) {
      accordionTriggers[i].addEventListener("click", function() {
        this.nextSibling.classList.toggle("h-show");
      });
    }
  }
};
</script>

<style lang="scss">
</style>
