<script setup lang="ts">
import imports from '@/utils/index'
import loading from '@/components/shared/loading.vue'

const { postReq, route } = imports()

interface Response {
    data: {
        token: string
        code: number
    }
}

postReq({
    type: 'post',
    url: '/dc/saveAccessToken',
    data: { token: localStorage.getItem('token'), code: route.query.code }
}).then((response: Response) => {
    if (response.data.code !== 101)
        return (window.location.href = `/error/?locale=${localStorage.getItem('locale')}`)
    else return (window.location.href = '/')
})
</script>

<template>
    <loading />
</template>
