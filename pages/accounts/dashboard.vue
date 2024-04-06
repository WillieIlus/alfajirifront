<template>
  <section class="relative lg:mt-24 mt-[74px]">
    <div class="lg:container container-fluid">
      <div class="relative shrink-0">
        <img src="assets/images/hero/bg5.jpg" class="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700"
          alt="">
      </div>

      <div class="md:flex mx-4 -mt-12">
        <div class="md:w-full">
          <div class="relative flex items-end justify-between">
            <div class="relative flex items-end">
              <img v-if="userById && userById.avatar" :src="userById.avatar" class="size-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                alt="">
              <div class="ms-4">
                <h5 class="text-lg font-semibold"> {{ userById && userById.first_name || 'Unknown' }} {{ userById && userById.last_name || 'User' }}</h5>
                <p class="text-slate-400">{{ userById && userById.role || 'Role not specified' }}</p>
              </div>
            </div>
            <div class="">
              <NuxtLink to="/accounts/profile" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white">
                <i data-feather="settings" class="size-4"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div><!--end -->
  </section>
  <!-- End Hero -->

  <!-- Start -->
  <section class="relative mt-12 md:pb-24 pb-16">
    <div class="container">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-8 md:col-span-7">
          <h5 class="text-xl font-semibold">{{ userById && userById.first_name || 'Unknown' }} {{ userById && userById.last_name || 'User' }}</h5>
          <p class="text-slate-400 mt-4">{{ userById && userById.bio || 'Bio not available' }}</p>
        </div><!--end col-->

        <div class="lg:col-span-4 md:col-span-5">
          <div class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
            <h5 class="text-lg font-semibold">Personal Detail:</h5>
            <ul class="list-none mt-4">
              <li class="flex justify-between mt-3 items-center font-medium">
                <span><i data-feather="mail" class="size-4 text-slate-400 me-3 inline"></i><span
                    class="text-slate-400 me-3">Email :</span></span>
                <span>{{ userById && userById.email || 'Email not provided' }}</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span><i data-feather="gift" class="size-4 text-slate-400 me-3 inline"></i><span
                    class="text-slate-400 me-3">D.O.B. :</span></span>
                <span>{{ userById && userById.date_of_birth || 'Date of Birth not provided' }}</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span><i data-feather="home" class="size-4 text-slate-400 me-3 inline"></i><span
                    class="text-slate-400 me-3">Address :</span></span>
                <span>{{ userById && userById.address || 'Address not provided' }}</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span><i data-feather="map-pin" class="size-4 text-slate-400 me-3 inline"></i><span
                    class="text-slate-400 me-3">City :</span></span>
                <span>{{ userById && userById.city || 'City not provided' }}</span>
              </li>
              <li class="flex justify-between mt-3 items-center font-medium">
                <span><i data-feather="phone" class="size-4 text-slate-400 me-3 inline"></i><span
                    class="text-slate-400 me-3">Mobile :</span></span>
                <span>{{ userById && userById.phone || 'Phone number not provided' }}</span>
              </li>
            </ul>
          </div>
        </div><!--end col-->
      </div><!--end grid-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- Start -->

</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAccountStore } from '~/store/accounts'

const pageTitle = ref('Dashboard')

const accountStore = useAccountStore()
const router = useRouter()

const { userById, isLoggedIn } = accountStore

const editProfile = () => {
  router.push('/accounts/profile')
}

const changePassword = () => {
  router.push('/accounts/change-password')
}

const getUserById = async () => {
  await accountStore.getUserById()
}

onMounted(() => {
  if (!isLoggedIn) {
    router.push('/login')
  }
  getUserById()
})

</script>
```
