import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { readonly, Ref, ref } from 'vue';

export const useSettings = defineStore('settings', () => {
  const isThemeLight: Ref<boolean> = useLocalStorage('isThemeLight', ref(true));

  function getTheme() {
    return isThemeLight.value ? 'light' : 'dark';
  }

  function toggleTheme() {
    isThemeLight.value = !isThemeLight.value;
  }

  const likes: Ref<number> = useLocalStorage('likes', ref(31337));

  return {
    isThemeLight: readonly(isThemeLight),
    getTheme,
    toggleTheme,
    likes,
  };
});
