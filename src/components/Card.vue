<template lang="html">
  <div class="card max-width-4 d-center justify p2">
    <h3 class="card-title"> {{ctitle}} </h3>
    <div class="card-body"> <slot name="cbody"></slot> </div>
    <div class="card-footer"> <slot name="cfooter"></slot> </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["ctitle"]
};
</script>

<style lang="scss">
.card {
  border: 1px solid gray;
  .card-title {
  }
  .card-body {
  }
}
</style>
