<template>
  <div v-for="(info, index) in infos" :key="index" class="container mx-auto p-2">
    <div class="flex justify-between">
      <div class="flex align-middle">
        <img
          :src="'https://dgzzoucizotfvfgamwgz.supabase.in/storage/v1/object/public/product-bucket/' + info.app_logo_url"
          :alt="info.app_name"
          class="h-8 mr-2"
        >
        <div class="font-bold text-2xl lowercase">
          {{ info.app_name }}
        </div>
      </div>

      <DarkToggle />
    </div>
  </div>
</template>

<script setup>
import DarkToggle from '../DarkToggle'

const { data: infos } = await useFetch('/api/info')
</script>

<style scoped>

</style>
