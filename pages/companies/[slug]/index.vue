<template>
  <div>
    <div v-if="loading" class="col-span-12 text-center">
      <div class="spinner"></div>
    </div>
    <div v-if="error" class="col-span-12 text-center">
      <p class="text-red-500">Error: {{ error.message }}</p>
    </div>
    <div v-if="company" class="relative">
      <!-- Start Hero -->
      <section class="relative table w-full py-40" :style="{
        backgroundImage: `url(${company.cover || '../../assets/images/hero/bg4.jpg'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }">
        <div class="absolute inset-0 bg-emerald-900/60"></div>
      </section>
      <!--end section-->

      <!-- Start -->
      <section class="relative mb:pb-24 pb-16 -mt-16 z-1">
        <div class="container">
          <div class="grid grid-cols-1">
            <div class="md:flex justify-between items-center shadow dark:shadow-gray-700 rounded-md p-6 bg-white dark:bg-slate-900">
              <div class="flex items-center">
                <img v-if="company.logo"  :src="company.logo"
                  class="size-14 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="">
                <div class="ms-4">
                  <h5 class="text-xl font-bold" v-if="company.name" > {{ company.name || 'Companies Name' }}</h5>
                  <h6 class="text-base text-slate-400" v-if="company.location" >
                    <Icon name="uil:map-marker" /> {{ company.location.name || 'Location' }}
                  </h6>
                </div>
              </div>
              <div class="md:mt-0 mt-4">
                <a href=""
                  class="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Follow</a>
                <a href=""
                  class="btn btn-sm bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-1">See
                  Jobs </a>
              </div>
            </div>
          </div>
        </div><!--end container-->

        <div class="container mt-12">
          <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div class="lg:col-span-8 md:col-span-7">
              <h5 class="text-xl font-semibold">Company Story</h5>
              <p class="text-slate-400 mt-4">{{ company.description }}</p>
              <h5 class="text-xl font-semibold mt-6">Vacancies:</h5>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div v-for="job in jobs" :key="job.id"
                  class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                  <div class="p-6">
                    <NuxtLink :to="`/jobs/${job.slug}`" class="title h5 text-lg font-semibold hover:text-emerald-600">{{ job.title }}</NuxtLink>
                    <p class="text-slate-400 mt-2">
                      <Icon name="uil:clock" /> {{ job.timesince }} ago
                    </p>
                    <div class="flex justify-between items-center mt-4">
                      <span class="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{{ job.timesince }}</span>
                      <p class="text-slate-400">
                        <Icon name="uil:usd-circle" class="text-emerald-600" />{{ job.currency }} {{ job.salary }}/ {{ job.salary_type }}
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                    <img v-if="job.company" :src="job.company?.logo || '~/assets/images/favicon.png'" class="size-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="">
                    <div class="ms-3">
                      <h6  class="mb-0 font-semibold text-base">{{ job.company?.name }}</h6>
                      <span class="text-slate-400 text-sm">{{ job.location?.name || 'location' }}</span>
                    </div>
                  </div>
                </div><!--end content-->
              </div><!--end grid-->
            </div><!--end col-->

            <div class="lg:col-span-4 md:col-span-5">
              <div class="bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-700 p-6 sticky top-20">
                <ul class="list-none mt-4">
                  <li class="flex justify-between mt-2">
                    <span class="text-slate-400 font-medium">Founded:</span>
                    <span class="font-medium">Not Specified</span>
                  </li>
                  <li class="flex justify-between mt-2">
                    <span class="text-slate-400 font-medium">Founder:</span>
                    <span class="font-medium">{{ company.user?.first_name }}</span>
                  </li>
                  <li class="flex justify-between mt-2" v-if="company.location">
                    <span class="text-slate-400 font-medium">Headquarters:</span>
                    <span class="font-medium">{{ company.location.name || 'Company location' }}</span>
                  </li>
                  <li class="flex justify-between mt-2">
                    <span class="text-slate-400 font-medium">Number of employees:</span>
                    <span class="font-medium">Not Specified</span>
                  </li>
                  <li class="flex justify-between mt-2">
                    <span class="text-slate-400 font-medium">Website:</span>
                    <span class="font-medium">{{ company.website }}</span>
                  </li>
                  <li class="flex justify-between mt-2">
                    <span class="text-slate-400 font-medium">Social:</span>
                    <ul class="list-none text-end space-x-0.5">
                      <li class="inline">
                        <NuxtLink to="/" target="_blank" class="btn btn-icon btn-sm border-2 border-gray-200 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:text-white text-slate-400">
                          <Icon name="uil:dribbble" class="align-middle" title="dribbble" />
                        </NuxtLink>
                      </li>
                      <!-- Add other social links similarly -->
                    </ul>
                  </li>
                </ul>
              </div>
            </div><!--end col-->
          </div><!--end grid-->
        </div><!--end container-->

        <div class="container lg:mt-24 mt-16">
          <div class="grid grid-cols-1 pb-8 text-center">
            <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Companies</h3>
            <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
          </div><!--end grid-->
          <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
            <div v-for="relatedCompany in relatedCompanies" :key="relatedCompany.id"
              class="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6">
              <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                <img v-if="relatedCompany.logo" :src="relatedCompany.logo || '' " class="size-8" :alt="relatedCompany.name || 'company name'">
              </div>
              <div class="mt-4">
                <NuxtLink :to="`/companies/${relatedCompany.slug}`" class="text-lg hover:text-emerald-600 font-semibold">{{ relatedCompany.name || 'company name' }}</NuxtLink>
                <p class="text-slate-400 mt-2">Digital Marketing Solutions for Tomorrow</p>
              </div>
              <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                <span class="text-slate-400" v-if="relatedCompany.location">
                  <Icon name="uil:map-marker" />{{ relatedCompany.location.name }}
                </span>
                <span class="block font-semibold text-emerald-600">{{ relatedCompany.job_count }} Jobs</span>
              </div>
            </div><!--end content-->
          </div><!--end grid-->
        </div><!--end container-->

        <div class="container-fluid md:mt-24 mt-16">
          <div class="container">
            <div class="grid grid-cols-1">
              <div class="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div class="lg:col-span-8 md:col-span-7">
                    <div class="md:text-start text-center relative z-1">
                      <h3 class="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                      <p class="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>
                  </div>
                  <div class="lg:col-span-4 md:col-span-5">
                    <div class="text-end relative z-1">
                      <NuxtLink to="/jobs/apply" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</NuxtLink>
                      <NuxtLink to="/about" class="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">Learn More</NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="absolute -top-5 -start-5">
                  <Icon name="uil:envelope" class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></Icon>
                </div>
                <div class="absolute -bottom-5 -end-5">
                  <Icon name="uil:pencil" class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:rotate-45 rtl:-rotate-45"></Icon>
                </div>
              </div>
            </div><!--end grid-->
          </div><!--end container-->
        </div><!--end container-->
      </section><!--end section-->
      <!-- Start -->
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCompanyStore } from '~/store/companies'
import { useJobStore } from '~/store/jobs'
import { routeLocationKey } from 'vue-router'

const companyStore = useCompanyStore()
const jobStore = useJobStore()

const { company, companies, loading, error } = storeToRefs(companyStore)
const { jobs } = storeToRefs(jobStore)

const route = useRoute()
const router = useRouter()

const fetchCompany = async () => {
  await companyStore.fetchCompany(route.params.slug)
}

const fetchCompaniesByCategory = async () => {
  await companyStore.fetchCompaniesByCategory()
}

const fetchJobsByCompany = async () => {
  await jobStore.fetchJobsByCompany(route.params.slug)
}

onMounted(() => {
  fetchCompany()
  fetchCompaniesByCategory()
  fetchJobsByCompany()
})

</script>