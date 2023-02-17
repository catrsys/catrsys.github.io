<template>
  <v-card class="mt-3 mx-3 bg-transparent" elevation="0">
    <v-card-title class="text-h1 text-center">
      <div class="text-h1">
        CATRSYS
      </div>
    </v-card-title>
    <v-card-actions class="align-items-end">
      <v-spacer></v-spacer>
      {{ likes }}
      <v-btn variant="text" icon="mdi-heart-outline" color="error" @click="likes++"></v-btn>

    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { useSettings } from '@/store/settings';
  import { storeToRefs } from 'pinia';

  const { likes } = storeToRefs(useSettings());
</script>