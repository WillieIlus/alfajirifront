<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAccountStore } from '~/store/accounts'

const breadcrumbs = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Dashboard',
    to: '/accounts/dashboard',
  },
])

const pageTitle = ref('Dashboard')

const accountStore = useAccountStore()
const router = useRouter()

const { user, isLoggedIn } = accountStore
const editProfile = () => {
  router.push('/accounts/profile')
}

const changePassword = () => {
  router.push('/accounts/change-password')
}

onMounted(() => {
  if (!isLoggedIn) {
    router.push('/login')
  }
})

</script>
```
