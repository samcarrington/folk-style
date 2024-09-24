<script setup lang="ts">
// Utils from Nuxt Content
const { flatUnwrap, unwrap } = useUnwrap();

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
  <ul class="p-0">
    <li
      v-for="(listItem, index) in flatUnwrap($slots.default(), ['ul','p'])"
      :key="index"
      class="flex space-x-2 not-prose"
    >
      <SiteIcon
        :name="icon"
        class="flex-shrink-0 w-6 h-6 mt-1"
        :class="color"
      />
      <span><ContentSlot :use="() => listItem" unwrap="ul li p" /></span>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.red {
  @apply text-red-500;
}
</style>
