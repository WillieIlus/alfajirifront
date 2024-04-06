<template>
  <div>
    <h1>Profile</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div>User: {{ userById }}</div>
      <br/>
      <hr/>
      <br/>
      <div> bio: {{ userById.bio  }}</div>
    </div>
  </div>
</template>                   
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import { useAccountStore } from '~/store/accounts'
import { useJobStore } from '~/store/jobs'
import { useCompanyStore } from '~/store/companies'

const route = useRoute()
const router = useRouter()
const accountStore = useAccountStore()
const jobStore = useJobStore()
const companyStore = useCompanyStore()

const { userById, loading, error } = storeToRefs(accountStore)
const { paginatedJobs } = storeToRefs(jobStore)
const { companies } = storeToRefs(companyStore)

const getPaginatedJobs = async () => {
  await jobStore.fetchJobs()
}

const getCompanies = async () => {
  await companyStore.fetchCompanies()
}

const getUserById = async () => {
  await accountStore.getUserById()
}

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/accounts/login')
  }
  getPaginatedJobs()
  getCompanies()
  getUserById()
})

</script>