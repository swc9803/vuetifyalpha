<template>
  <!-- toggle -->
  <v-navigation-drawer v-bind="$attrs" class="bg-orange-lighten-2 text-indigo-darken-4" app>
    <v-list-item class="bg-orange-lighten-1">
      <v-list-item-content>
        <v-list-item-title>
          Sung Blog
        </v-list-item-title>
        <v-list-item-subtitle>
          Vuetify Alpha3 with Scss
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <!-- menu -->
    <v-list>
      <v-list-item
        v-for="menu in menus"
        :key="menu.title"
        link
        :to="menu.to">
        <v-list-item-icon>
          <v-icon>
            {{ menu.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  data () {
    return {
      menus: [
        { title: 'Vuetify Alpha3', icon: 'mdi-vuetify', to: '/vuetify-alpha3' },
        { title: 'Vue3', icon: 'mdi-palette', to: '/vue3' },
        { title: 'Scss', icon: 'mdi-palette', to: '/scss' },
        { title: 'Firebase', icon: 'mdi-server-network', to: '/firebase' },
        { title: 'SignIn', icon: 'mdi-server-network', to: '/sign-in' },
        { title: 'SignUp', icon: 'mdi-server-network', to: '/sign-up' },
        { title: 'ProductList', icon: 'mdi-server-network', to: '/product-list' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
