<template>
  <SpinnerFlex v-if="loading" />
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div v-if="userById">
      <section class="relative lg:mt-24 mt-[74px]">
        <div class="lg:container container-fluid">
          <div class="relative shrink-0">
            <img v-if="userById.avatar" class="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700"
              alt="">
            <img v-else src="~/assets/images/team/01.jpg"
              class="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700" alt="Default Image">
          </div>
          <div class="md:flex mx-4 -mt-12">
            <div class="md:w-full">
              <div class="relative flex items-end justify-between">
                <div class="relative flex items-end">
                  <img v-if="userById.avatar" :src="userById.avatar"
                    class="size-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                    alt="">
                    <img v-else src="~/assets/images/team/01.jpg" 
                    class="size-28 rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                    alt="">
                  <div class="ms-4">
                    <h5 class="text-lg font-semibold"> {{ userById.first_name || '' }} {{ userById.last_name || '' }}
                    </h5>
                    <p class="text-slate-400">{{ userById.role || 'Role not specified' }}</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <!-- Profile Edit Link -->
                  <span class="relative inline-block">
                    <NuxtLink to="/accounts/profile"
                      class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white"
                      @mouseover="hoverText = 'Edit Profile'" @mouseleave="hoverText = ''">
                      <Icon name="uil:pen" class="size-4" />
                    </NuxtLink>
                    <span v-if="hoverText === 'Edit Profile'"
                      class="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-lg mt-4">
                      Edit Profile
                    </span>
                  </span>

                  <!-- Add Company Link -->
                  <span class="relative inline-block ms-2">
                    <NuxtLink to="/companies/add-company"
                      class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white"
                      @mouseover="hoverText = 'Add Company'" @mouseleave="hoverText = ''">
                      <Icon name="uil:plus" class="size-4" />
                    </NuxtLink>
                    <span v-if="hoverText === 'Add Company'"
                      class="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-lg mt-4">
                      Add Company
                    </span>
                  </span>

                  <!-- Add Job Link -->
                  <span class="relative inline-block ms-2">
                    <NuxtLink to="/jobs/add-job"
                      class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white"
                      @mouseover="hoverText = 'Add Job'" @mouseleave="hoverText = ''">
                      <Icon name="uil:newspaper" class="size-4" />
                    </NuxtLink>
                    <span v-if="hoverText === 'Add Job'"
                      class="absolute top-0 left-0 bg-gray-800 text-white px-2 py-1 rounded-lg mt-4">
                      Add Job
                    </span>
                  </span>

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
              <h5 class="text-xl font-semibold">{{ userById.first_name || 'Unknown' }} {{ userById.last_name || 'User'
                }}
              </h5>
              <p class="text-slate-400 mt-4">{{ userById.bio || 'Bio not available' }}</p>
            </div><!--end col-->

            <div class="lg:col-span-4 md:col-span-5">
              <div class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                <h5 class="text-lg font-semibold">Personal Detail:</h5>
                <ul class="list-none mt-4">
                  <li class="flex justify-between mt-3 items-center font-medium">
                    <span><i data-feather="mail" class="size-4 text-slate-400 me-3 inline"></i><span
                        class="text-slate-400 me-3">Email :</span></span>
                    <span>{{ userById.email || 'Email not provided' }}</span>
                  </li>
                  <li class="flex justify-between mt-3 items-center font-medium">
                    <span><i data-feather="gift" class="size-4 text-slate-400 me-3 inline"></i><span
                        class="text-slate-400 me-3">D.O.B. :</span></span>
                    <span>{{ userById.date_of_birth || 'Date of Birth not provided' }}</span>
                  </li>
                  <li class="flex justify-between mt-3 items-center font-medium">
                    <span><i data-feather="home" class="size-4 text-slate-400 me-3 inline"></i><span
                        class="text-slate-400 me-3">Address :</span></span>
                    <span>{{ userById.address || 'Address not provided' }}</span>
                  </li>
                  <li class="flex justify-between mt-3 items-center font-medium">
                    <span><i data-feather="map-pin" class="size-4 text-slate-400 me-3 inline"></i><span
                        class="text-slate-400 me-3">City :</span></span>
                    <span>{{ userById.city || 'City not provided' }}</span>
                  </li>
                  <li class="flex justify-between mt-3 items-center font-medium">
                    <span><i data-feather="phone" class="size-4 text-slate-400 me-3 inline"></i><span
                        class="text-slate-400 me-3">Mobile :</span></span>
                    <span>{{ userById.phone || 'Phone number not provided' }}</span>
                  </li>
                </ul>
              </div>
            </div><!--end col-->
          </div><!--end grid-->
        </div><!--end container-->
      </section><!--end section-->
      <!-- Start -->
    </div>
  
  </div>
  <div v-if="companies">
    <section class="relative md:py-24 py-16">
      <div class="container">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div v-for="company in companies" :key="company.id"
            class="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
              <img :src="company.logo" class="size-8" :alt="company.name">
            </div>
  
            <div class="mt-4">
              <NuxtLink :to="`/companies/${company.slug}`"
                class="text-lg hover:text-emerald-600 font-semibold">{{ company.name }}</NuxtLink>
              <p class="mt-2 text-slate-400 dark:text-slate-500 truncate">{{ company.truncated_description || 'Description not available' }}</p>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
              <span class="text-slate-400">
                <Icon name="uil:map-marker" />{{ company.get_location || 'Location not specified' }}
              </span>
              <span class="block font-semibold text-emerald-600">{{ company.total_jobs || 0 }} Jobs</span>
            </div>
          </div><!--end content-->
        </div><!--end grid-->
      </div><!--end container-->
    </section><!--end section-->
  </div>

</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useAccountStore } from '~/store/accounts'
import { useCompanyStore } from '~/store/companies'

const router = useRouter()
const accountStore = useAccountStore()
const companyStore = useCompanyStore()

const { user, userById, loading, error } = storeToRefs(accountStore)
const { companies } = storeToRefs(companyStore)


const editProfile = () => {
  router.push('/accounts/profile')
}

const changePassword = () => {
  router.push('/accounts/change-password')
}

const getUserById = async () => {
  await accountStore.getUserById()
}

const getUser = async () => {
  await accountStore.getUser()
}

const fetchMyCompanies = async () => {
  await companyStore.fetchMyCompanies()
}


onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/login')
  }
  getUserById()
  getUser()
  fetchMyCompanies()
})

</script>
```
