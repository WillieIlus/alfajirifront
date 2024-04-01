<template>
  <!-- Start Hero -->
  <section class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Employers /
          Companies</h3>
      </div><!--end grid-->
    </div><!--end container-->

    <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
      <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <NuxtLink to="/">Jobstack</NuxtLink>
        </li>
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <NuxtLink to="/companies">Companies</NuxtLink>
        </li>
        <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
          aria-current="page">Companies</li>
      </ul>
    </div>
  </section><!--end section-->
  <div class="relative">
    <div
      class="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
      <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <!-- End Hero -->

  <!-- Start -->
  <section class="relative md:py-24 py-16">
    <div class="container">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div v-for="company in companies" :key="company.id"
          class="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
          <div
            class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
            <img :src="company.logo" class="size-8" :alt="company.name">
          </div>

          <div class="mt-4">
            <NuxtLink :to="`/companies/${company.slug}`" class="text-lg hover:text-emerald-600 font-semibold">{{
              company.name }}</NuxtLink>
            <p class="mt-2 text-slate-400 dark:text-slate-500 truncate">{{ company.truncated_description }} </p>
          </div>
        <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
          <span class="text-slate-400">
            <Icon name="uil:map-marker" />{{ company.get_location }}
          </span>
          <span class="block font-semibold text-emerald-600">{{ company.total_jobs }} Jobs</span>
        </div>
      </div><!--end content-->
    </div><!--end grid-->
    </div><!--end container-->
  </section><!--end section-->
</template>
<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useAccountStore } from '~/store/accounts'
import { useLocationStore } from '~/store/locations'

const companyStore = useCompanyStore()
const categoriesStore = useCategoryStore()
const accountStore = useAccountStore()
const locationStore = useLocationStore()

const { companies, loading, error } = storeToRefs(companyStore)
const { categories } = storeToRefs(categoriesStore)

const fetchCompanies = async () => {
  await companyStore.fetchCompanies()
}

const fetchCategories = async () => {
  await categoriesStore.fetchCategories()
}


onMounted(() => {
  fetchCompanies()
  fetchCategories()
})
</script>