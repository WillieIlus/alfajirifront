<template>
  <!-- Start Hero -->
  <section class="relative table w-full py-36 bg-[url('~/assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">{{ job ?
          job.title : 'Job Title' }}</h3>
      </div>
    </div>
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
          aria-current="page">
          {{ job ? job.title : 'Job Title' }}
        </li>
      </ul>
    </div>
  </section>
  <!-- End Hero -->

  <!-- Start Job Details -->
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
              <img :src = "job.company?.logo || '~/assets/images/favicon.png'"
                class="rounded-full size-28 p-4 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700" alt="">
              <div class="md:ms-4 md:mt-0 mt-6">
                <h5 class="text-xl font-semibold">{{ job.title || 'Job Title' }}</h5>
                <div class="mt-2">
                  <span class="text-slate-400 font-medium me-2 inline-block" v-if="job.company">
                    <Icon name="uil:building" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.company.name || 'Company Name' }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block" v-if="job.location">
                    <Icon name="uil:map-pin" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.location.name || 'Location' }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:eye" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.view_count || 0 }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:mouse-alt" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.click_count || 0 }}
                  </span>
                  <span class="text-slate-400 font-medium me-2 inline-block">
                    <Icon name="uil:heart" class="text-[18px] text-emerald-600 me-1" />
                    {{ job.bookmarks || 0 }}
                  </span>
                </div>
              </div>
            </div>

            <h5 class="text-lg font-semibold mt-6">Job Description:</h5>
            <p class="text-slate-400 mt-4">{{ job.description || 'Job description not available' }}</p>

            <div class="mt-5">
              <NuxtLink :to="'mailto:' + (job.email || '')"
                class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">
                Apply Now
              </NuxtLink>
            </div>
          </div>
        </div>

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
                <!-- Other job information here -->
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Vacancies -->
      <div class="container lg:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Vacancies</h3>
          <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get
            your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          <div class="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900"
            v-for="relatedJob in relatedJobs" :key="relatedJob.id">
            <!-- Render related job items -->
          </div>
        </div>
      </div>

      <!-- Explore Job Section -->
      <div class="container-fluid md:mt-24 mt-16">
        <div class="container">
          <div class="grid grid-cols-1">
            <div class="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700">
              <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div class="lg:col-span-8 md:col-span-7">
                  <div class="md:text-start text-center relative z-1">
                    <h3 class="text-2xl font-semibold text-black dark:text-white mb-4">Explore a job now!</h3>
                    <p class="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own
                      personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                  </div>
                </div>
                <div class="lg:col-span-4 md:col-span-5">
                  <div class="text-end relative z-1">
                    <NuxtLink to="/jobs/add-job"
                      class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                      Apply Now</NuxtLink>
                    <NuxtLink to="/about"
                      class="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">
                      Learn More</NuxtLink>
                  </div>
                </div>
              </div>
              <div class="absolute -top-5 -start-5">
                <Icon name="uil-envelope"
                  class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></Icon>
              </div>
              <div class="absolute -bottom-5 -end-5">
                <Icon name="uil-pen"
                  class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-90 rtl:rotate-90"></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Job Details -->
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
// create a const seoJob for useSeoMeta to add twitter and facebook meta tags

const seoJob = computed(() => {
  return {
    title: job.value.title,
    description: job.value.description,
    image: job.value.company?.logo,
    url: router.currentRoute.value.fullPath,
    type: 'article',
    article: true,
    publishedAt: job.value.created_at,
    modifiedAt: job.value.updated_at,
    category: job.value.category?.name,
    tags: job.value.tags,
    openGraph: {
      title: job.value.title,
      description: job.value.description,
      image: job.value.company?.logo,
      url: router.currentRoute.value.fullPath,
      type: 'article',
      article: true,
      publishedAt: job.value.created_at,
      modifiedAt: job.value.updated_at,
      category: job.value.category?.name,
      tags: job.value.tags,
    },
    twitter: {
      title: job.value.title,
      description: job.value.description,
      image: job.value.company?.logo,
      url: router.currentRoute.value.fullPath,
      card: 'summary_large_image',
      site: '@your-twitter-handle',
    },
  }
})

useSeoMeta(seoJob)

onMounted(async () => {
  await fetchJob(route.params.slug)
  await fetchJobsByCategory(job.value.category.slug)
})

</script>
