<script setup lang="ts">
// Utils from Nuxt Content
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:badge-check',
  },
  color: {
    type: String,
    default: 'text-emerald-500',
  }
});
</script>

<template>
  <ContentSlot />
</template>

