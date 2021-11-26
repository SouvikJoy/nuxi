<template>
  <header class="bg-gray-300 dark:bg-gray-900">
    <Header />
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer class="bg-gray-300 dark:bg-gray-900">
    <Footer />
  </footer>
</template>

<script setup>

import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
</script>

<style>
@import '@unocss/reset/tailwind.css';
</style>
