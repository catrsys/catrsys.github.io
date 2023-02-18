<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      default: 'Count',
    },
    number: {
      type: Number,
      default: 31337,
    },
    icon: {
      type: String,
      default: 'mdi-cursor-default-click-outline',
    },
  });

  const displayNumber = ref(0);
  let interval: any = null;

  onMounted(() => {
    interval = window.setInterval(() => {
      if (displayNumber.value !== props.number) {
        let change = (props.number - displayNumber.value) / 10;
        change = change >= 0 ? Math.ceil(change) : Math.floor(change);
        displayNumber.value += change;
      }
    }, 90);
  });

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
</script>

<template>
  <v-card elevation="0">
    <v-row class="ma-0" align="center" justify="center">
      <v-col class="py-2" cols="auto">
        <v-icon size="75px" class="text-medium-emphasis" theme="dark">
          {{ props.icon }}
        </v-icon>
      </v-col>
      <v-col class="py-2 fill-height text-right text-white">
        <h1 class="py-1">{{ displayNumber }}</h1>
        <span class="text-subtitle-1 styled">{{ props.title }}</span>
      </v-col>
    </v-row>
  </v-card>
</template>
