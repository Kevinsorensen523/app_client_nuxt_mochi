<!-- ivan | 15 Juli 2023 -->
<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'ursweethingsq | Mochi Bites Ichigo Daifuku Tangerang',
  meta: [
    { name: 'description', content: 'Temukan beragam piliha Mochi & Desert manis terenak hanya di ursweethingsq | Menyediakan berbagai macam desert manis dan mochi.' },
    { name: 'keywords', content: 'ursweethingsq, mochi, mochi bites, ichigo daifuku, tangerang, dessert, dessert manis, mochi tangerang, dessert tangerang, mochi bites tangerang, dessert manis tangerang' }
    
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>