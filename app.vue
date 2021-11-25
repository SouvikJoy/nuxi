<template>
  <header class="bg-gray-300 dark:bg-gray-900">
    <Header />
  </header>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup>

import Header from './components/Common/Header'
</script>

<style>
@import '@unocss/reset/tailwind.css';
@import '/public/styles/main.css';
</style>
