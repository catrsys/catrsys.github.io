<script setup lang="ts">
  import { storeToRefs } from 'pinia';

  import { useSettings } from '@/store/settings';

  const { isThemeLight } = storeToRefs(useSettings());
  const { getTheme, toggleTheme } = useSettings();
</script>

<template>
  <v-checkbox
    :theme="getTheme()"
    :model-value="isThemeLight"
    false-icon="mdi-weather-night"
    true-icon="mdi-weather-sunny"
    @click="toggleTheme"
    hide-details
  ></v-checkbox>
</template>
