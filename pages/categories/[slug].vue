<template>
  <!-- Start Hero -->
  <section class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Vacancies
        </h3>
      </div><!--end grid-->
    </div><!--end container-->
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
  <section class="relative -mt-[42px] md:pb-24 pb-16">
    <div class="container mt-10 pt-5">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">

        <div v-for="job in jobs" :key="job.id"
          class="group p-6 rounded-lg border border-emerald-600/20 dark:border-emerald-600/40 bg-white dark:bg-slate-900 hover:bg-emerald-600/[0.02] hover:dark:bg-emerald-600/5 hover:shadow-md hover:shadow-emerald-600/5 transition-all duration-500">
          <div class="flex justify-between items-start">
            <div>
              <div
                class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full mb-2">
                <img :src="job.company.logo || job.company.name" class="size-8" :alt="job.company.name">
              </div>
              <NuxtLink :to="'/companies/' + job.company.slug"
                class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{{ job.company.name }}
              </NuxtLink>

            </div>
            <div class="flex items-center">
              <NuxtLink to="/"
                class="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl">
                <Icon name="mdi:heart" />
              </NuxtLink>

              <NuxtLink to="/"
                class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white ms-1">
                <Icon name="uil:bookmark" class="size-4" />
              </NuxtLink>
              <NuxtLink :to="'/jobs/' + job.slug"
                class="btn btn-icon rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border-emerald-600/10 text-emerald-600 group-hover:text-white ms-1">
                <Icon name="uil:arrow-up-right"></Icon>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-3">
            <NuxtLink :to="'/jobs/' + job.slug"
              class="text-xl hover:text-emerald-600 font-semibold transition-all duration-500">{{ job.title }}
            </NuxtLink>
            <p class="text-slate-400 mt-2">{{ job.truncated_description }}</p>
            <div class="mt-3">
              <NuxtLink t0="">
                <span
                  class="bg-orange-500/5 hover:bg-orange-500/20 dark:bg-orange-500/10 hover:dark:bg-orange-500/30 inline-block text-orange-500 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
                  {{ job.job_type }}</span>
              </NuxtLink>

              <NuxtLink to="">
                <span
                  class="bg-purple-600/5 hover:bg-purple-600/20 dark:bg-purple-600/10 hover:dark:bg-purple-600/30 inline-block text-purple-600 px-4 text-[14px] font-medium rounded-full mt-2 me-1 transition-all duration-500">
                  {{ job.currency }}, {{ job.min_salary }} - {{ job.currency }}, {{ job.max_salary }}
                </span>
              </NuxtLink>
              <NuxtLink to="" v-if="job && job.location && job.location.name">
                <span
                  class="bg-emerald-600/5 hover:bg-emerald-600/20 dark:bg-emerald-600/10 hover:dark:bg-emerald-600/30 inline-block text-emerald-600 px-4 text-[14px] font-medium rounded-full mt-2 transition-all duration-500">
                  <Icon name="uil:location-point" class="me-1" />{{ job.address }}, {{ job.location.name }}
                </span>
              </NuxtLink>

            </div>
          </div>
        </div><!--end content-->
      </div><!--end grid-->

      <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
        <div class="md:col-span-12 text-center">
          <nav aria-label="Page navigation example">
            <ul class="inline-flex items-center -space-x-px">
              <li>
                <a href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                  <i class="uil uil-angle-left text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                </a>
              </li>
              <li>
                <a href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</a>
              </li>
              <li>
                <a href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</a>
              </li>
              <li>
                <a href="#" aria-current="page"
                  class="z-10 size-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">3</a>
              </li>
              <li>
                <a href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</a>
              </li>
              <li>
                <a href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</a>
              </li>
              <li>
                <a href="#"
                  class="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                  <i class="uil uil-angle-right text-[20px] rtl:rotate-180 rtl:-mt-1"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div><!--end col-->
      </div><!--end grid-->
    </div><!--end container-->

    <div class="container md:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Here's why you'll love
          it
          Jobstack</h3>

        <p class="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized
          salary estimate. Read reviews on over 30000+ companies worldwide.</p>
      </div><!--end grid-->

      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        <div
          class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
          <div
            class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
            <i class="uil uil-phone text-[30px] text-emerald-600 group-hover:text-white"></i>
          </div>

          <div class="mt-4">
            <a href="" class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">24/7 Support</a>

            <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

            <a href="" class="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i
                class="uil uil-arrow-right"></i></a>
          </div>
        </div><!--end content-->

        <div
          class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
          <div
            class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
            <i class="uil uil-atom text-[30px] text-emerald-600 group-hover:text-white"></i>
          </div>

          <div class="mt-4">
            <a href="" class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Tech & Startup
              Jobs</a>

            <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

            <a href="" class="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i
                class="uil uil-arrow-right"></i></a>
          </div>
        </div><!--end content-->

        <div
          class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
          <div
            class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
            <i class="uil uil-user-arrows text-[30px] text-emerald-600 group-hover:text-white"></i>
          </div>

          <div class="mt-4">
            <a href="" class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Quick & Easy</a>

            <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

            <a href="" class="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i
                class="uil uil-arrow-right"></i></a>
          </div>
        </div><!--end content-->

        <div
          class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
          <div
            class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
            <i class="uil uil-hourglass text-[30px] text-emerald-600 group-hover:text-white"></i>
          </div>

          <div class="mt-4">
            <a href="" class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Save Time</a>

            <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>

            <a href="" class="hover:text-emerald-600 font-medium transition-all duration-500">Read More <i
                class="uil uil-arrow-right"></i></a>
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
                  <p class="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized
                    salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
              </div><!--end col-->

              <div class="lg:col-span-4 md:col-span-5">
                <div class="text-end relative z-1">
                  <NuxtLink to="/jobs"
                    class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                    Apply Now</NuxtLink>

                  <NuxtLink to="/jobs"
                    class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                    Learn More</NuxtLink>
                </div>
              </div><!--end col-->
            </div><!--end grid-->

            <div class="absolute -top-5 -start-5">
              <Icon name="uil:envelope"
                class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></Icon>
            </div>
            <div class="absolute -bottom-5 -end-5">
              <div class="uil uil-pen lg:text-[150px] text-7xl text-black/5 dark:text-white/5 rtl:-rotate-90"></div>
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
import { watch } from 'vue'

import { useCategoryStore } from '~/store/categories'
import { useJobStore } from '~/store/jobs'

const jobStore = useJobStore()
const categoryStore = useCategoryStore()

const route = useRoute();

const { category, loading, error } = storeToRefs(categoryStore);
const { jobs, } = storeToRefs(jobStore)

const { fetchCategory } = categoryStore;
const { fetchJobsByCategory } = jobStore


onMounted(async () => {
  await fetchCategory(route.params.slug);
  await fetchJobsByCategory(route.params.slug);

});

</script>