<template>
  <header class="site-header pin-t pin-r pin-l">
    <nav id="site-menu" class="site-menu" :class="{ 'is-open': show }">
      <div
        class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center"
      >
        <div class="logo flex-none">
          <SiteLogo />
        </div>
        <button
          id="menuBtn"
          class="hamburger block sm:hidden focus:outline-none"
          type="button"
          aria-label="Navigation Menu"
          @click="toggleNav"
        >
          <span class="hamburger__top-bun"></span>
          <span class="hamburger__bottom-bun"></span>
        </button>
      </div>
      <div class="menu flex" :class="{ hidden: !show }">
        <ContentNavigation v-slot="{ navigation }">
          <NuxtLink
            v-for="link of navigation"
            :key="link._path"
            :to="link._path"
            active-class="font-bold"
            class="w-full mr-4 sm:w-auto sm:pr-1 py-2 sm:py-1 sm:pt-2 text-gray-700 dark:text-gray-200"
          >
            {{ link.navTitle || link.title }}
          </NuxtLink>
        </ContentNavigation>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { show, toggleNav } = useNavbar();
</script>

<style lang="postcss" scoped>
.site-header {
  @apply w-full flex flex-col fixed sm:relative bg-white sm:bg-transparent;
}

.site-menu {
  @apply bg-transparent dark:bg-gray-900 sm:bg-transparent flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6;
}

.menu {
  @apply w-full sm:block sm:w-auto self-end sm:self-center sm:flex flex-grow flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 justify-center;
}
.dark .hamburger:hover [class*='-bun'] {
  @apply bg-red-400;
}

.hamburger {
  cursor: pointer;
  width: 48px;
  height: 48px;
  transition: all 0.25s;

  &:hover [class*='-bun'] {
    @apply bg-rose-800 dark:bg-rose-300;
  }

  &__top-bun,
  &__bottom-bun {
    @apply bg-black dark:bg-white;
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    transform: rotate(0);
    transition: all 0.5s;
  }

  &__top-bun {
    transform: translateY(-5px);

    .is-open & {
      transform: rotate(45deg) translateY(0px);
    }
  }

  &__bottom-bun {
    transform: translateY(3px);

    .is-open & {
      transform: rotate(-45deg) translateY(0px);
    }
  }
}

.is-open .hamburger {
  transform: rotate(90deg);
  transform: translateY(-1px);
}
</style>
