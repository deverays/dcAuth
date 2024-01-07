<script setup lang="ts">
import appHeader from '@/components/appHeader.vue'
import imports from '@/utils/index'

const { postReq } = imports()

async function home() {
    const response = await postReq({
        type: "post",
        url: '/dc/getUser',
        data: { token: localStorage.getItem('token') }
    })

    console.log(response.data)
}

home()
</script>

<template>
    <appHeader />
</template>
