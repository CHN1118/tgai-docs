<!-- .vitepress/theme/components/select_language.vue -->
<template>
  <div class="language-selector">
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="en">English</option>
      <option value="ja">Japanese</option>
      <option value="zh">Chinese</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selectedLanguage = ref(localStorage.getItem('language') || 'en')
const changeLanguage = () => {
  localStorage.setItem('language', selectedLanguage.value)
  location.reload()
}
</script>

<style scoped>
.language-selector {
  display: inline-block;
  margin: 10px;
}

.language-selector select {
  padding: 8px 12px;
  border: 1px solid #cccccc00;
  border-radius: 4px;
  background-color: #ffffff00;
  font-size: 16px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  outline: none;
}

.language-selector select:focus {
  border-color: #007bff00;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0);
}

.language-selector option {
  padding: 10px;
}
</style>
