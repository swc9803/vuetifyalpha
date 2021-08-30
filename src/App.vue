<template>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>

<script>

export default {

}
</script>
<style lang="scss">
$navcolor: #F57C00;
.nav {
  background: $navcolor;
}
</style>
