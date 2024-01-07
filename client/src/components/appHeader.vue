<script setup lang="ts">
function redirect() {
    console.log(import.meta.env.VITE_VDISCORD_REDIRECT_URI)
    window.location.href = import.meta.env.VITE_DISCORD_REDIRECT_URI
}
</script>

<template>
    <button @click="redirect">Discord Bağlantı</button>
</template>

<style lang="scss" scoped>
</style>
