<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-navigation-drawer model-value class="pt-4" color="grey-lighten-3" rail>
    <v-avatar
      v-for="n in 6"
      :key="n"
      :color="`grey-${n === 1 ? 'darken' : 'lighten'}-1`"
      :size="n === 1 ? 36 : 20"
      class="d-block text-center mx-auto mb-9"
    ></v-avatar>
  </v-navigation-drawer>
  <v-main>
    <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
    <RouterView />
  </v-main>
</template>

<style scoped>
v-main {
  margin: 0;
  background: linear-gradient(45deg, #3df2cb, #300573) !important;
}
</style>
