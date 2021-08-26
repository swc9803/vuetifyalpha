<template>
  <div class="left">
    <div class="box1">
      <div class="box2"/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
$color : rgb(231, 78, 78);
$color2 : cyan;
$width : 100px;
$height : 100px;
div {
  width: 500px;
  height: 500px;
  background: $color2;
  position: absolute;
  div {
    width: $width;
    height: $height;
    background: $color;
    position: relative;
  }
}
.box1 {
  width: 500px;
  height: 500px;
  background: yellow;
  top: 50%;
}
</style>
