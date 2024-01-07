<script setup lang="ts">
import imports from '@/utils/index'

const { route, locale } = imports()

function redirect() {
    window.location.href = `/?locale=${localStorage.getItem('locale')}`
}
</script>

<template>
    <p>{{ locale({ lng: route.query.locale as string })?.shared.error.text }}</p>
    <button type="button" @click="redirect">
        {{ locale({ lng: route.query.locale as string })?.shared.error.button }}
    </button>
</template>
