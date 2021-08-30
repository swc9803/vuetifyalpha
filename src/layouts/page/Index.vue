<template>
  <v-app>
    <PageAppBar />
    <PageView />
  </v-app>
</template>

<script>
import PageAppBar from './AppBar'
import PageView from './View'
export default {
  name: 'PageLayout',
  components: {
    PageAppBar, PageView
  }
}
</script>

<style lang="scss" scoped>

</style>
