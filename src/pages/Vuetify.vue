<template>
  vuetify alpha3를 쓰는 이유, vue3와의 호환성, 클래스 명이 다르다 bg는 백그라운드,축약어등 정리하기
  <br><br><a href="https://next.vuetifyjs.com/en/getting-started/v3-alpha-release-notes/">업데이트목록</a>
  <v-container>
    <v-row>
      <v-col v-for="count in 12" :key="count.value"
      cols="12"
      sm="6"
      md="4">
        <v-card class="pa-3">
          썸네일
          제목
          라우터네임/세부사항
          내용
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
