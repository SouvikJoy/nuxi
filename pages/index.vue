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
              class="max-h-52"
            />
            <p
              class="text-center text-2xl font-bold pt-6"
            >
              {{ category.name }}
            </p>
            <p
              class="text-center text-sm text-gray-500 font-bold"
            >
              {{ category.description }}
            </p>
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

    <div class="index_3 dt_index_page_2 md:py-20">
      <div class="container mx-auto">
        <div class="flex place-items-center gap-4 px-10">
          <div
            class="text-2xl md:text-5xl font-bold py-6"
          >
            Services
          </div>
          <hr
            class="border-4 w-full border-cyan-400"
          >
        </div>
        <div class="grid md:grid-cols-2 md:place-items-center md:grid-flow-col gap-4">
          <div class="row-span-2 self-center">
            <img
              src="https://res.cloudinary.com/souvik-joy/image/upload/v1631621592/5.avif"
              alt="background image"
            />
          </div>
          <div
            class="grid grid-cols-2"
          >
            <div v-for="(service, index) in services" :key="index">
              <div class="p-6">
                <img
                  src="https://res.cloudinary.com/souvik-joy/image/upload/v1631639320/icon-4.svg"
                  :alt="service.name"
                  class="mb-2"
                />
                <p class="text-2xl md:text-3xl md:mb-4">
                  {{ service.name }}
                </p>
                <p class="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form ref="subForm" class="text-gray-600 dark:text-gray-300 bg-cyan-50 body-font" @submit.prevent="postToDB">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900 dark:text-white">
            Subscribe to Morgan Design
          </h1>
          <p class="leading-relaxed mt-4">
            I send out a weekly newsletter with tips and tricks for web
            development. I promise, only relevant content will be sent.
          </p>
        </div>
        <div
          class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          dark:bg-gray-700
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          mt-10
          md:mt-0
        "
        >
          <h2 class="text-gray-900 dark:text-gray-300 text-lg font-medium title-font mb-5">
            Subscribe
          </h2>

          <div class="relative mb-4">
            <label
              for="email"
              class="leading-7 text-sm text-gray-600 dark:text-gray-300"
            >Email</label>
            <input
              id="email"
              v-model="userEmail"
              type="email"
              name="email"
              class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
            />
          </div>
          <button
            class="
            text-white
            bg-cyan-500
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-indigo-600
            rounded
            text-lg
          "
          >
            Subscribe
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them the things i'm bout to
            shoot into your inbox.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import HorizontalCard from '../components/HorizontalCard'

const { data: products } = await useFetch('/api/product')
const { data: categories } = await useFetch('/api/category')
const { data: infos } = await useFetch('/api/info')
const { data: services } = await useFetch('/api/service')

const DBResponse = ref([])
const userEmail = ref('')
async function postToDB() {
  const result = await fetch(`/api/subscribe?email=${userEmail.value}`)
  const data = await result.json()
  DBResponse.value = data
  userEmail.value = ''
}
</script>

<script>

</script>
