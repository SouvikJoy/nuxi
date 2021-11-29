<template>
  <div v-for="(info, index) in infos" :key="index" class="container mx-auto pt-6 py-2 px-6 md:px-8">
    <div class="footer">
      <div class="xl:container xl:mx-auto">
        <div class="footer-content">
          <div class="grid grid-cols-3 md:grid-cols-3 gap-20 place-item-center">
            <div class="col-span-2">
              <NuxtLink
                to="/"

                class="flex align-middle place-content-start"
              >
                <img
                  width="25"
                  height="25"
                  :src="'https://dgzzoucizotfvfgamwgz.supabase.in/storage/v1/object/public/product-bucket/' + info.app_logo_url"
                  :alt="info.app_name"
                  class="mr-2"
                />
                <h1 class="dt_defaultHeader_content_brandName font-family-nexa">
                  {{ info.app_name }}
                </h1>
              </NuxtLink>

              <hr
                class="border-1 w-full border-cyan-400 my-4 mx-0"
              >

              <div class="uppercase font-bold">
                Head Office
              </div>

              <p class="text-sm mb-0">
                APT# {{ info.app_address_extra.apartment }},
                House# {{ info.app_address_extra.house }},
                <br>
                Road# {{ info.app_address_extra.road }},
                {{ info.app_address_extra.town }}
                <br>
                Dhaka-{{ info.app_address_extra.postcode }},
                {{ info.app_address_extra.country }}
              </p>

              <div class="column-heading mb-0">
                <span class="text-sm">
                  <strong>Email: </strong>
                  <a href="mailto:contact@morgandesign.style?subject=About Query For a Product">
                    {{ info.app_name }}
                  </a>
                </span>
              </div>

              <div class="column-heading">
                <span class="text-sm">
                  <a href="tel:+8809638796021">
                    <strong>
                      Cell:
                    </strong>
                    {{ info.app_cellphone }}
                  </a>
                </span>
              </div>
            </div>
            <div class="footer-links-column-1">
              <div class="column-heading">
                Important Links
              </div>
              <hr
                class="border-1 w-full border-cyan-400 my-4 mx-0"
              >

              <div>
                <nuxt-link to="/">
                  Products
                </nuxt-link>
                <nuxt-link to="/">
                  About us
                </nuxt-link>
                <nuxt-link to="/">
                  Contact
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex text-center align-middle py-2 md:px-6 px-2 justify-between p dark:bg-gray my-2">
      <div class="copyright-text">
        © {{ new Date().getFullYear() }} |
        <span class="font-bold">
          Debbugger.tech
        </span> | All rights reserved
      </div>
      <div class="theme-button-content">
        <button class="theme-button mr-4">
          Terms & Condition
        </button>
        <button class="theme-button mr-4">
          Security Policy
        </button>
        <button class="theme-button">
          Support
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: infos } = await useFetch('/api/info')
</script>

<style scoped>

</style>
