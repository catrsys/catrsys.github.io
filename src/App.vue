<script setup lang="ts">
  import { RouterView } from "vue-router";

  import ThemeToggle from '@/components/ThemeToggle.vue';

  import { useSettings } from '@/store/settings'

  const { getTheme } = useSettings();

  const avatars = {
    github: {
      logo: '/home/catrsys/projects/catrsys.github.io/public/github-logo.png',
      link: 'https://github.com/catrsys',
    },
    tg: {
      logo: '/home/catrsys/projects/catrsys.github.io/public/telegram-logo.png',
      link: 'https://t.me/catrsys'
    }
    
  }
</script>

<template>
  <v-app :theme="getTheme()">
    <v-navigation-drawer model-value class="pt-4" rail>
      <a href="#">
        <v-avatar
          size="36"
          class="d-block text-center mx-auto mb-9"
          src='/home/catrsys/projects/catrsys.github.io/src/assets/avatar.jpg'
        >
        </v-avatar>
      </a>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      <a
        :href="avatar.link"
        v-for="(avatar, key) in avatars"
        :key="key"
      >
        <v-avatar
          size="20"
          class="d-block text-center mx-auto mb-9"
          :src='avatar.logo'
        >
        </v-avatar>
      </a>
    </v-navigation-drawer>

    <v-app-bar border class="border-bottom">
      <v-toolbar-title>
        {{ $router.currentRoute.value.name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <ThemeToggle :class="'flex-grow-0 mr-3'"></ThemeToggle>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

body, div, span, strong {
  font-family: 'Montserrat', sans-serif;
}

v-main {
  margin: 0;
  background: linear-gradient(45deg, #3df2cb, #300573) !important;
}

.border-bottom {
  border-width: 0 0 1px 0 !important;
}
</style>
