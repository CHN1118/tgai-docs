<!-- .vitepress/theme/components/select_language.vue -->
<template>
  <select v-model="selectedLanguage" @change="changeLanguage">
    <option value="en">English</option>
    <option value="ja">Japanese</option>
    <option value="zh">Chinese</option>
  </select>
</template>

<script setup>
import { ref } from "vue";
const selectedLanguage = ref(localStorage.getItem("language") || "en");
const changeLanguage = () => {
  localStorage.setItem("language", selectedLanguage.value);
  location.reload();
};
</script>
