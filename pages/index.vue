<script setup lang="ts">
// import { useGoogleapis } from 'composables/useGoogleapis';
const { getSheetData } = useGoogleapis();
console.log('useGoogleapis', getSheetData());
</script>

<template>
  <div>
    <h1>This is Index Page!</h1>
  </div>
</template>