<template lang="html">
  <div class="review d-center justify p2">
    <blockquote>
      <p>{{reviews.review}}</p>
      <h5>{{reviews.reviewer}}</h5>
      <small>{{reviews.designation}}</small>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: ["reviews"]
};
</script>

<style lang="scss">
</style>
