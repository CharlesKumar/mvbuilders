<template lang="html">
  <div id="project-page">
    <div class="h-300 purple-bliss__gradient">
      <div class="c c-white flex flex-col flex-aic flex-jcc h-100p">
        <h2>MV Builders</h2>
        <h5>Good Projects are the wealth of a Company</h5>
      </div>
    </div>
    <h1 class="c">List of Our Projects</h1>
    <p class="c"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit soluta, quis ducimus eum magni nostrum repellendus nobis, deserunt, aperiam accusantium inventore vero aliquam mollitia assumenda rem cumque, quo ea.</span><span>Voluptas commodi repellat totam, suscipit ad voluptatibus tempora vero, asperiores atque cum. Quaerat similique est laudantium, praesentium aperiam. Consequuntur quos consequatur, quam nihil minima architecto enim cum iste tempora ea?</span></p>
    <div class="c">
      <h2 class="">Current Project:</h2>
      <div class="row c">
        <div class="col-sm2">
          <img src="@/assets/MV1.jpg" alt="" class="mw-100 h-400">
        </div>
        <div class="col-sm2">
            <h3>MV Vistara</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, explicabo amet accusantium, ratione suscipit, similique repellat eos asperiores ipsam praesentium corrupti. Omnis nisi quisquam sequi, harum, iusto repellat nihil optio!</p>
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
          <h3 class="accordion-title">Project 1 - 2015</h3>
          <div class="accordion-data h-show">
            <img src="https://source.unsplash.com/1200x400?building" alt="" class="mw-100">
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ratione dignissimos eum quidem illo fuga quia. Eum quisquam, sint eveniet, excepturi vero obcaecati libero magnam, consequuntur recusandae aspernatur dolore iure!</p>
          </div>
        </div>
        <div class="accordion-set">
          <h3 class="accordion-title">Project 2 - 2013</h3>
          <div class="accordion-data">
            <img src="https://source.unsplash.com/1201x400?building" alt="" class="mw-100">
              <h4>Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non delectus iure recusandae ea, ex necessitatibus facere rerum blanditiis. Repellendus, non qui labore. Nobis possimus porro necessitatibus sed ea perspiciatis corporis.</p>
          </div>
        </div>
        <div class="accordion-set">
          <h3 class="accordion-title">Project 3 - 2011</h3>
          <div class="accordion-data">
            <img src="https://source.unsplash.com/1202x400?building" alt="" class="mw-100">
              <h4>Title</h4>
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
