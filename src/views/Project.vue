<template lang="html">
  <div id="project-page">
    <div class="h-300 purple-bliss__gradient"></div>
    <h1 class="c">List of Our Projects</h1>
    <p class="c"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A suscipit soluta, quis ducimus eum magni nostrum repellendus nobis, deserunt, aperiam accusantium inventore vero aliquam mollitia assumenda rem cumque, quo ea.</span><span>Voluptas commodi repellat totam, suscipit ad voluptatibus tempora vero, asperiores atque cum. Quaerat similique est laudantium, praesentium aperiam. Consequuntur quos consequatur, quam nihil minima architecto enim cum iste tempora ea?</span></p>
    <div class="c">
      <h2 class="c">Current Project:</h2>
      <h3>MV Vistara</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, explicabo amet accusantium, ratione suscipit, similique repellat eos asperiores ipsam praesentium corrupti. Omnis nisi quisquam sequi, harum, iusto repellat nihil optio!</p>
      <div class="accordion">
        <div class="accordion-set">
          <h3 class="accordion-title">Project 1</h3>
          <div class="accordion-data h-show">
            <img src="https://source.unsplash.com/1200x400?building" alt="" class="mw-100">
            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ratione dignissimos eum quidem illo fuga quia. Eum quisquam, sint eveniet, excepturi vero obcaecati libero magnam, consequuntur recusandae aspernatur dolore iure!</p>
          </div>
        </div>
        <div class="accordion-set">
          <h3 class="accordion-title">Project 2</h3>
          <div class="accordion-data">
            <img src="https://source.unsplash.com/1201x400?building" alt="" class="mw-100">
              <h4>Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non delectus iure recusandae ea, ex necessitatibus facere rerum blanditiis. Repellendus, non qui labore. Nobis possimus porro necessitatibus sed ea perspiciatis corporis.</p>
          </div>
        </div>
        <div class="accordion-set">
          <h3 class="accordion-title">Project 3</h3>
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
        console.log(this.nextSibling);
      });
    }
  }
};
</script>

<style lang="scss">
</style>
