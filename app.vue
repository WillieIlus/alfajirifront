<template>
    <!-- make the footer stick to the bottom -->
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <div class="flex-grow">
            <NuxtPage />
        </div>
        <Footer />
    </div>
</template>
<script setup>

// load user 
import { useAccountStore } from '~/store/accounts'
import { storeToRefs } from 'pinia'

const accountStore = useAccountStore()
const { user } = storeToRefs(accountStore)

onMounted(() => {
    accountStore.getUser()
})
</script>
