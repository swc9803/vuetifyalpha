<template>
  <!-- navbar -->
  <v-app-bar class="nav text-white" app>
    <v-app-bar-nav-icon @click="drawer" class="nav" app/>
    <v-toolbar-title>
      {{ $route.name }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'DeafaultAppBar',
  setup (props, { emit }) {
    const drawer = () => {
      emit('drawer')
    }
    return {
      drawer
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
