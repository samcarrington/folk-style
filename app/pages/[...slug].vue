<template>
  <div
    class="mt-3 max-w-2xl px-4 py-16 sm:py-8 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 sm:rounded"
  >
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <template #not-found>
        <h1 class="text-2xl dark:text-white text-gray-800">Page not found</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose {
  h2,
  h3,
  h4 {
    a {
      @apply no-underline;
      &:hover {
        @apply border-b border-neutral-600 dark:border-neutral-300;
      }
    }
  }
}
</style>
