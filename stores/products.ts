import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const all = ref('')

  return {
    all,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
