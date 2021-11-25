<template>
  <div>
    <Suspense>
      <pre>
      {{ data }}
    </pre>
    </Suspense>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/products', { pick: ['products'] })
</script>
