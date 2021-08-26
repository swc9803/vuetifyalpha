<template>
  <v-app>
    <!-- navbar -->
    <v-app-bar class="bg-red-lighten-1 text-white" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="bg-red-lighten-1" app/>
      <v-toolbar-title> {{ $route.name }} </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Sung Blog
            </v-list-item-title>
            <v-list-item-subtitle>
              Vuetify Alpha3 with Scss
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
      <!-- footer -->
      <v-footer class="bg-red-lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link.value"
          class="bg-red-darken-3 text-white"
        >
          {{ link }}
        </v-btn>
      </v-row>
      </v-footer>
  </v-app>
</template>

<script>
// import DiceIcon from '@/components/Dice.svg'
import { ref } from 'vue'
// import { useRouter } from 'vue-router'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      items: [
        { title: 'Vuetify Alpha3', icon: 'mdi-vuetify' },
        { title: 'Vue3', icon: require('@/components/Dice.svg') },
        { title: 'Scss', icon: 'mdi-palette' },
        { title: 'Firebase', icon: 'mdi-server-network' }
      ]
    }
  },
  setup () {
    // const router = useRouter()
    const drawer = ref(false)
    // props: [{
    //   items: {
    //     title: 'Vuetify Alpha3', icon: 'mdi-view-dashboard',
    //     title: 'Vue3', icon: 'DiceIcon'
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
<style lang="scss">
$backgroundcolor: #27affd;

</style>
