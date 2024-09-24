<template lang="pug">
footer.footer.max-w-2xl.px-1.py-5.m-auto.flex.justify-between(role="contentinfo", aria-label="footer", class="sm:px-1")
  div.text-sm.text-gray-500 &copy; Sam Carrington {{ year }}
  div.text-sm.text-gray-500.flex
    .mx-2.mt-1
      span.text-gray-500.text-xs
        nuxt-link.bg-green-500.px-2.py-1.rounded-sm.text-gray-800(
          to="/changelog"
          class="hover:bg-gray-100 hover:text-gray-800 hover:rounded-sm"
          ) v{{ config.public.appVersion }}

    .ml-4.mt-1.h-5.w-5
      a(href="https://github.com/samcarrington/code-style",
        rel="nofollow noopener noreferrer"
        target="_blank")
        icon-github
        .sr-only View this project on Github
    .ml-4.h-5.w-18
      .text-gray-500.transition
        ColorModeSwitch(class='bg-gray-900 hover:text-gray-700 dark:hover:text-gray-300', size='w-5 h-5')

</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = useRuntimeConfig();
</script>

<script>
export default {
  name: 'SiteFooter',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
