<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/products', { pick: ['products'] })
</script>
