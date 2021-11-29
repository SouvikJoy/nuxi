<template>
  <div class="max-w-md mx-auto dark:bg-gray-700 dark:bg-opacity-[25%] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <nuxt-link to="/">
          <img
            class="w-full md:min-w-60 md:max-w-40 lg:min-w-80 h-52 object-cover"
            :src=" 'https://dgzzoucizotfvfgamwgz.supabase.in/storage/v1/object/public/product-bucket/' + product.image"
            :alt="product.name"
          >
        </nuxt-link>
      </div>
      <div class="p-4 xl:p-8">
        <div class="uppercase tracking-wide text-sm font-semibold">
          {{ product.name }}
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="block mt-1 leading-tight font-medium hover:underline"
        >
          {{ product.brief }}
        </a>
        <p class="mt-2  text-sm xl:text-lg text-[#858685]">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
