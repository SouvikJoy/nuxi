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

      <div class="md:block hidden">
        <nuxt-link to="/" class="px-4">
          About
        </nuxt-link>

        <nuxt-link to="/" class="px-4">
          Services
        </nuxt-link>

        <nuxt-link to="/" class="px-4">
          Gallery
        </nuxt-link>

        <nuxt-link to="/" class="px-4">
          Contact
        </nuxt-link>
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
