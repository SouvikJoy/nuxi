<template>
  <div>
    <div v-for="(info, index) in infos" :key="index">
      <div class="index grid min-h-screen px-[20px] py-[80px] md:p-[100px] bg-opacity-50 text-white bg-no-repeat bg-cover">
        <div class="index_1 grid md:grid-cols-2 md:gap-16 place-items-center container mx-auto">
          <div
            class="test grid place-items-center md:block order-last xl:order-first"
          >
            <h1
              class="text-3xl lowercase font-family-nexa md:text-7xl font-bold md:mb-2 text-center md:text-left"
            >
              {{ info.app_name }}
            </h1>
            <p
              class="text-md mb-0 md:text-3xl md:mb-4 text-center md:text-left text-cyan-500"
            >
              {{ info.app_brief }}
            </p>
            <p
              class="px-4 text-[12px] md:text-[16px] px-6 md:px-0 text-gray-400 text-center md:text-left leading-[15px] md:leading-[24px] md:leading-normal"
            >
              {{ info.app_description }}
            </p>
          </div>
          <img
            :src="'https://dgzzoucizotfvfgamwgz.supabase.in/storage/v1/object/public/product-bucket/' + info.app_logo_url"
            :alt="info.app_name"
            class="p-10 md:p-0"
          />
        </div>
      </div>
    </div>

    <div class="index_2 dt_index_page_2 md:py-20">
      <div class="container mx-auto py-6">
        <div class="flex place-items-center gap-4 px-10">
          <hr
            class="border-4 w-full border-cyan-400"
          >
          <div
            class="text-lg md:text-2xl xl:text-5xl font-bold py-6"
          >
            PRODUCT CAN PRODUCE BY MORGAN DESIGN
          </div>
        </div>
        <div class="grid justify-center grid-cols-2 xl:grid-cols-4 md:place-items-center gap-4">
          <div v-for="(category, index) in categories" :key="index" class="mx-6 md:mx-0">
            <img
              v-if="category.image"
              :src="'https://dgzzoucizotfvfgamwgz.supabase.in/storage/v1/object/public/product-bucket/' + category.image"
              :alt="category.name"
              class="h-60"
            />
            <div
              class="text-center text-2xl font-bold py-6"
            >
              {{ category.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index_4 container mx-auto md:py-20">
      <div class="flex place-items-center gap-4 px-10">
        <hr
          class="border-4 w-full border-cyan-400"
        >
        <div

          class="text-2xl md:text-5xl font-bold py-6"
        >
          Products
        </div>
      </div>
      <div

        class="grid md:grid-cols-2 gap-8"
      >
        <div v-for="(product, index) in products" :key="index">
          <HorizontalCard :product="product" class="mx-6 md:mx-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HorizontalCard from '../components/HorizontalCard'

const { data: products } = await useFetch('/api/product')
const { data: categories } = await useFetch('/api/category')
const { data: infos } = await useFetch('/api/info')
</script>

<script>

</script>
