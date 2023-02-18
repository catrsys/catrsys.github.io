<script setup lang="ts">
  import { RouterView } from "vue-router";

  import ThemeToggle from '@/components/ThemeToggle.vue';

  import { useSettings } from '@/store/settings'

  const { getTheme } = useSettings();
</script>

<template>
  <v-app :theme="getTheme()">

    <v-app-bar class="bg-transparent" elevation="0">
      <v-spacer></v-spacer>
      <ThemeToggle :class="'flex-grow-0 mr-3'"></ThemeToggle>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
