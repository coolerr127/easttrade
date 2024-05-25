import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
    languageOptions: {
        globals: {
            defineNuxtPlugin: 'readonly',
        },
    },
    features: {
        tooling: true,
    },
})
