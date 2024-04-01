<template>
  <!-- Start Hero -->
  <section class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">{{ 'Job Title' }}</h3>

      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
      <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <NuxtLink to="/jobs">Jobs</NuxtLink>
        </li>
        <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
          aria-current="page">{{ 'Job Title' }}</li>
      </ul>
    </div>
  </section>
  <!--end section-->
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

  <section class="bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
    <div class="container mt-10">
      <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-8 md:col-span-6">
          <div v-if="loading" class="text-center">
            <div class="spinner spinner-primary"></div>
          </div>
          <div v-else-if="error" class="text-center">
            <p class="text-red-500">{{ error }}</p>
          </div>
          <div v-if="job">
            <div class="md:flex items-center p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
              <img :src="job.company.logo"
                class="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" alt="">
              <div class="md:ms-4 md:mt-0 mt-6">
                <h5 class="text-xl font-semibold">{{ job.title || 'Job Title'}}</h5>
                <div class="mt-2">
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:building" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.company.name }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:map-pin" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.location.name }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:eye" class="text-[18px] text-emerald-600 me-1"/>
                    {{ job.view_count }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:mouse-alt" class="text-[18px] text-emerald-600 me-1"/>
                    {{ job.click_count }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:heart" class="text-[18px] text-emerald-600 me-1"/>
                    {{ job.bookmarks }}
                  </span>

                </div>
              </div>
            </div>

            <h5 class="text-lg font-semibold mt-6">Job Description:</h5>

            <p class="text-slate-400 mt-4">{{ job.description }}</p>

            <div class="mt-5">
              <NuxtLink :to="'mailto:' + job.email ?? job.company.email ?? ''"
                class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">
                Apply
                Now</NuxtLink>
            </div>
          </div>
        </div><!--end col-->

        <div v-if="job" class="lg:col-span-4 md:col-span-6">
          <div class="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
            <div class="p-6">
              <h5 class="text-lg font-semibold">Job Information</h5>
            </div>
            <div class="p-6 border-t border-slate-100 dark:border-t-gray-700">
              <ul class="list-none">
                <li class="flex items-center">
                  <Icon name="uil:user-check" class="size-5" />
                  <div class="ms-4">
                    <p class="font-medium">Employee Type:</p>
                    <span class="text-emerald-600 font-medium text-sm">{{ job.job_type || 'Not Specified' }}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <Icon name="uil:map-pin" class="size-5" />
                  <div class="ms-4">
                    <p class="font-medium">Location:</p>
                    <span class="text-emerald-600 font-medium text-sm">{{ job.address || job.location.name || 'Not Specified' }}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <Icon name="uil:monitor" class="size-5" />
                  <div class="ms-4">
                    <p class="font-medium">Job Type:</p>
                    <span class="text-emerald-600 font-medium text-sm">{{ job.job_type || 'Not Specified' }}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <Icon name="uil:briefcase" class="size-5" />
                  <div class="ms-4">
                    <p class="font-medium">Experience:</p>
                    <span class="text-emerald-600 font-medium text-sm">{{ job.work_experience || 'Not Specified'}}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <Icon name="uil:book" class="size-5" />
                  <div class="ms-4">
                    <p class="font-medium">Qualifications:</p>
                    <span class="text-emerald-600 font-medium text-sm">{{ job.education_level || 'Not Specified'}}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <Icon name="uil:money-bill" class="size-5" />
                  <div v-if="job.min_salary" class="ms-4">
                    <p class="font-medium">Salary:</p>
                    <span class="text-emerald-600 font-medium text-sm">{{ job.currency }} {{ job.min_salary }} - {{ job.currency }} {{ job.max_salary }}</span>
                  </div>
                </li>

                <li class="flex items-center mt-3">
                  <Icon name="uil:calendar-alt" class="size-5" />

                  <div class="ms-4">
                    <p class="font-medium">Date posted:</p>
                    <!-- show only date of created_at: "created_at": "2024-03-10T22:42:23.097763+03:00",-->
                    <span class="text-emerald-600 font-medium text-sm">{{ job.timesince }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end grid-->
      <div class="pt-6 grid md:grid-cols-12 grid-cols-1 gap-[30px]">
        <div class="lg:col-span-8 md:col-span-6">
          <div class="p-6 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
            <h5 class="text-lg font-semibold">Share this job</h5>
            <div class="mt-4">
              <div class="flex items-center gap-4">
              <!-- <SocialShare network="facebook" />
              <SocialShare network="twitter" />
              <SocialShare network="linkedin" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container lg:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Vacancies</h3>

        <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get
          your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
      </div><!--end grid-->

      <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
        <div class="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900" v-for="job in jobs" :key="job.id">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                <img :src="job.company.logo || job.company.name" class="size-8" :alt="job.company.name">
              </div>
              <div class="ms-3">
                <Nuxtlink :to="'/companies/' + job.company.slug"
                  class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{{ job.company.name }}</Nuxtlink>
                <span class="block text sm text-slate-400">{{ job.timesince }} ago</span>
              </div>
            </div>

            <span
              class="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
              {{ job.job_type }}</span>
          </div>

          <div class="mt-6">
            <NuxtLink :to="'/categories/' + job.category.slug"
              class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{{ job.category.name }}</NuxtLink>
            <h6 class="text-base font-medium"><Icon name="uil:map-marker" class="text-emerald-600 me-1" /> {{ job.location.name }}</h6>
          </div>

          <!-- <div class="mt-6">
            <div class="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
              <div class="bg-emerald-600 h-[6px] rounded-full" style="width: 55%"></div>
            </div>
            <div class="mt-2">
              <span class="text-slate-400 text-sm"><span
                  class="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40
                vacancy</span>
            </div>
          </div> -->
        </div><!--end content-->

      </div>
      <!--end grid-->
    </div><!--end container-->

    <div class="container-fluid md:mt-24 mt-16">
      <div class="container">
        <div class="grid grid-cols-1">
          <div class="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
            <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
              <div class="lg:col-span-8 md:col-span-7">
                <div class="md:text-start text-center relative z-1">
                  <h3 class="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                  <p class="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized
                    salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
              </div>

              <div class="lg:col-span-4 md:col-span-5">
                <div class="text-end relative z-1">
                  <NuxtLink to="/jobs/add-job"
                    class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply
                    Now</NuxtLink>
                    <NuxtLink to="/about"
                    class="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">Learn
                    More</NuxtLink>
                </div>
              </div>
            </div>

            <div class="absolute -top-5 -start-5">
              <Icon name="uil-envelope" class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></Icon>
            </div>

            <div class="absolute -bottom-5 -end-5">
              <Icon name="uil-pen" class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-90 rtl:rotate-90"></Icon>
            </div>
          </div>
        </div><!--end grid-->
      </div><!--end container-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- End -->



</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'


const jobStore = useJobStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()

const { job, jobs, loading, error } = storeToRefs(jobStore)
const route = useRoute()
const router = useRouter()

const { fetchJob, fetchJobsByCategory } = jobStore

onMounted(async () => {
  await fetchJob(route.params.slug)
  await fetchJobsByCategory(job.value.category.slug)
})

</script>
