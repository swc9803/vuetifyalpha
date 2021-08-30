<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 20" :key="i.value"
      cols="12"
      sm="6"
      md="4"
      lg="3"
      >
        <ProductItem />
      </v-col>
    </v-row>
  </v-container>
  프로덕트리스트
</template>

<script>
import ProductItem from '@/components/product/ProductItem'
export default {
  name: 'AuthenticationLayout',
  components: {
    ProductItem
  }
}
</script>

<style lang="scss" scoped>

</style>
