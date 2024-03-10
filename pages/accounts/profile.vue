                   
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

const { user, loading, error } = storeToRefs(accountStore)
const { paginatedJobs } = storeToRefs(jobStore)
const { companies } = storeToRefs(companyStore)

const getUser = async () => {
  await accountStore.getUser()
}

const getPaginatedJobs = async () => {
  await jobStore.fetchJobs()
}

const getCompanies = async () => {
  await companyStore.fetchCompanies()
}

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Settings', to: '/accounts/settings' }
]

const pageTitle = 'Settings'

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/accounts/login')
  }
  getUser()
  getPaginatedJobs()
  getCompanies()
})

</script>