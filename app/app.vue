<template>
  <div class='sm:py-10'>
    <Html lang='en'>
    <Head>
      <Meta property='og:image' content='/cover.jpg' />
      <Meta name='twitter:card' content='summary_large_image' />
    </Head>
    </Html>
    <SiteNav />
    <NuxtPage />
    <SiteFooter />
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      titleTemplate: (title) => `${title} | Code Style | Gwawr`,
      bodyAttrs: {
        'data-pride':''
      },
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-7C0V8P4P5D'
        }, {
          type: 'text/javascript',
          innerHTML: 'window.dataLayer = window.dataLayer || [];\n' +
              '  function gtag(){dataLayer.push(arguments);}\n' +
              '  gtag(\'js\', new Date());\n' +
              '\n' +
              '  gtag(\'config\', \'G-7C0V8P4P5D\');',
          tagPosition: 'bodyOpen'
        }
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bitter&display=swap"
        },
      ]
    })
  },

  watch: {
    $route() {
      const { show }  = useNavbar();
      show.value = false;
    }
  }
}
</script>

<style lang='postcss'>

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

body {
  @apply bg-gray-50 dark:bg-gray-900;

  .prose {
    :not(h1, h2, h3, h4, h5, h6) a {
      @apply dark:text-sky-400 text-sky-700;
    }
    pre {
      box-shadow: rgb(0 0 0 / 35%) 0 5px 15px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Bitter', serif;
    }

  }

  .prose :where(code):not(:where([class~="not-prose"] *)) {

    &::after,
    &::before {
      content: '';
    }

  }
}

[data-pride] {
  --badge-height: 3px;
  margin-top: var(--badge-height);

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--badge-height);
    z-index: 9999;
    background: linear-gradient(
      to right,
      #e50203 9.09%,
      #ff8d01 9.09% 18.18%,
      #ffee00 18.18% 27.27%,
      #008121 27.27% 36.36%,
      #034cfe 36.36% 45.45%,
      #750287 45.45% 54.54%,
      #ffffff 54.54% 63.63%,
      #5ccefa 63.63% 72.72%,
      #f6a8b7 72.72% 81.81%,
      #784f19 81.81% 90.9%,
      #000000 90.9% 100%
    ) fixed;
  }
}
</style>
