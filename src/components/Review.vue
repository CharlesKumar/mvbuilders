<template lang="html">
  <div class="review d-center tac justify p2 hero-margin">
    <!-- <blockquote>
      <p>{{reviews.review}}</p>
      <h5>{{reviews.reviewer}}</h5>
      <small>{{reviews.designation}}</small>
    </blockquote> -->
    <img :src="reviews.src" alt="" class="review-img mb3">
    <p class="d-center mb3">{{reviews.review}}</p>
    <h5>{{reviews.reviewer}}</h5>
    <small>{{reviews.designation}}</small>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: ["reviews"]
};
</script>

<style lang="scss">
@media all and (min-width: 960px) {
  .review p {
    max-width: 60%;
  }
}
@media all and (min-width: 1200px) {
  .review p {
    max-width: 80%;
  }
}
.review {
  background-color: rgb(250, 235, 215);

  .review-img {
    border-radius: 50%;
    width: 240px !important;
  }
}
</style>
