<script setup>
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation',
  },
});
</script>

<template>
  <div class="alert-box p-4 rounded-md bg-yellow-50 dark:bg-lime-900">
    <div class="flex">
      <div v-if="icon" class="flex-shrink-0 mr-3">
        <SiteIcon
          class="w-5 h-5 text-yellow-400 dark:txt-yellow-50"
          aria-hidden="true"
          :name="icon"
        />
      </div>
      <div>
        <!-- eslint-disable-next-line vuejs-accessibility/heading-has-content -->
        <h3
          v-if="$slots.title"
          class="alert-box__title m-0 text-base font-medium text-yellow-800 dark:text-yellow-100"
        >
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <div class="alert-box__content mt-2 text-sm text-yellow-700 dark:text-yellow-100">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
:is(.dark body .prose .alert-box :not(h1, h2, h3, h4, h5, h6) a) {
  @apply text-lime-100;
}
</style>
