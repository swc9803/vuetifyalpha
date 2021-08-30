<template>
  <v-app color="primary" bg="secondary">
    <AppBar @drawer="drawer = !drawer"/>
    <Drawer v-model="drawer"/>
    <View />
  </v-app>
</template>

<script>
import AppBar from './AppBar'
import Drawer from './Drawer'
import View from './View'
import { ref } from 'vue'

export default {
  name: 'DeafaultLayout',
  components: {
    AppBar, Drawer, View
  },
  setup () {
    const drawer = ref(false)
    // const router = useRouter()
    // props: [{
    //   menus: {
    //     title: 'Vuetify Alpha3', icon: 'mdi-view-dashboard',
    //     title: 'Vue3', icon: 'DiceIcon',
    //     title: 'Scss', icon: 'mdi-image',
    //     title: 'Firebase', icon: 'mdi-fire',
    //   }]
    // }
    return {
      drawer
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
