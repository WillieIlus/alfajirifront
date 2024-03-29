<template>
    <!-- Start Hero -->
    <section
        class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
        <div class="absolute inset-0 bg-emerald-900/90"></div>
        <div class="container">
            <div class="grid grid-cols-1 text-center mt-10">
                <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job
                    Vacancies</h3>
            </div>
            <!--end grid-->
        </div><!--end container-->

        <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
            <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                <li
                    class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
                    <NuxtLink to="/">Alfajirijobs</NuxtLink>
                </li>
                <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
                    aria-current="page">Job Listing</li>
            </ul>
        </div>
    </section><!--end section-->
    <!-- End Hero -->

    <!-- Start -->
    <section class="relative md:py-24 py-16">
        <div class="container">
            <div v-if="loading" class="col-span-12 text-center">
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
            <div v-if="error" class="col-span-12 text-center">
                <p class="text-red-500">Error: {{ error.message }}</p>
            </div>
            <div v-if="paginatedJobs">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-4 md:col-span-6">
                        <div
                            class="shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                            <form>
                                <div class="grid grid-cols-1 gap-3">
                                    <div>
                                        <label for="searchname" class="font-semibold">Search Company</label>
                                        <div class="relative mt-2">
                                            <Icon name="uil:search" class="text-lg absolute top-[5px] start-3" />
                                            <input name="search" id="searchname" type="text"
                                                class="form-input border border-slate-100 dark:border-slate-800 ps-10"
                                                placeholder="Search">
                                        </div>
                                    </div>

                                    <div>
                                        <label class="font-semibold">Categories</label>
                                        <select
                                            class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                            <select v-if="categories"
                                                class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option v-for="category in categories" :key="category.id"
                                                    :value="category.id">
                                                    {{ category.name }}</option>
                                            </select>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="font-semibold">Location</label>
                                        <select
                                            class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                            <option v-if="locations" v-for="location in locations" :key="location.id"
                                                :value="location.id">{{ location.name }}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="font-semibold">Job Types</label>
                                        <div class="block mt-2">
                                            <div v-if="jobTypes">
                                                <div v-for="jobType in jobTypes" :key="jobType.id"
                                                    class="flex justify-between">
                                                    <div class="inline-flex items-center mb-0">
                                                        <input
                                                            class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                                                            type="checkbox" value="" id="fulltime">
                                                        <label class="form-checkbox-label text-slate-400"
                                                            for="fulltime">{{
                jobType.name }}</label>
                                                    </div>
                                                    <span
                                                        class="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">{{
                jobType.count }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div>
                                        <input type="submit"
                                            class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                                            value="Apply Filter">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div><!--end col-->

                    <div class="lg:col-span-8 md:col-span-6">
                        <div class="grid grid-cols-1 gap-[30px]">
                            <div v-for="job in paginatedJobs" :key="job.id"
                                class="group relative overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 hover:-mt-2 rounded-md transition-all duration-500 h-fit">
                                <div class="p-6">
                                    <div class="flex items-center">
                                        <div
                                            class="size-14 min-w-[56px] flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <!-- if no logo  display none -->
                                            <div v-if="job.company.logo" class="size-8">
                                                <img :src="job.company.logo" class="size-8" alt="">
                                            </div>
                                            <div v-else class="size-8">
                                                <img src="https://plchldr.co/i/200x200?bg=808080&text=LOGO"
                                                    class="size-8" alt="">
                                            </div>
                                            <!-- <img :src="job.company.logo" class="size-8" alt=""> -->
                                        </div>

                                        <div class="ms-3">
                                            <NuxtLink :to="'/jobs/' + job.slug"
                                                class="inline-block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500 me-1">
                                                {{ job.title }}</NuxtLink>
                                            <span class="inline-block text-sm text-slate-400">{{ job.timesince }}
                                                ago</span>
                                            <div>
                                                <span
                                                    class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">
                                                    {{ job.job_type }}</span>
                                                <span class="text-sm font-medium inline-block me-1">Est. time: <span
                                                        class="text-slate-400">1 to 3 months</span></span>
                                                <span class="text-sm font-medium inline-block me-1">Hourly: <span
                                                        class="text-slate-400">$16 - $20</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-slate-400 py-3 truncate">{{ job.truncated_description }}</p>
                                    <div v-if="job.skills && job.skills">
                                        <span v-for="skill in job.skills" :key="skill.id"
                                            class="bg-slate-100 dark:bg-slate-800 inline-block text-slate-900 dark:text-slate-300 text-xs px-2.5 py-0.5 font-semibold rounded-full me-1">{{
                skill.name }}</span>
                                    </div>
                                </div>

                                <div
                                    class="px-6 py-2 bg-slate-50 dark:bg-slate-800 lg:flex justify-between items-center">
                                    <div class="lg:inline-block flex justify-between">
                                        <span class="inline-block me-1 font-semibold">
                                            <Icon name="uil:eye"
                                                class="text-xl text-slate-400 dark:text-slate-300 me-1" />
                                            {{ job.view_count }}
                                        </span>
                                        <span class="inline-block me-1 text-slate-400">
                                            <Icon name="uil:mouse-alt"
                                                class="text-xl text-slate-400 dark:text-slate-300 me-1" />
                                            {{ job.click_count }}
                                        </span>
                                        <span class="inline-block me-1 text-slate-400">
                                            <Icon name="uil:map-marker"
                                                class="text-xl text-slate-400 dark:text-slate-300 me-1" />
                                            {{ job.get_location }}
                                        </span>
                                    </div>
                                    <NuxtLink :to="`/jobs/${job.slug}`"
                                        class="btn btn-sm rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full lg:w-auto lg:mt-0 mt-4">
                                        Apply
                                        Now</NuxtLink>
                                </div>
                                <NuxtLink :to="'/jobs/bookmark/' + job.id"
                                    class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white absolute top-0 end-0 m-3">
                                    <Icon name="uil:bookmark" class="size-4" />
                                </NuxtLink>
                            </div><!--end content-->

                        </div><!--end grid-->
                        <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
                            <div class="md:col-span-12 text-center">

                                <nav aria-label="Page navigation example">
                                    <ul class="inline-flex items-center -space-x-px">
                                        <li v-for="page in totalPages" :key="page">
                                            <a @click="setCurrentPage(page)"
                                                :class="currentPage === page ? 'bg-emerald-600 text-white' : 'text-slate-400'"
                                                class="size-[40px] inline-flex justify-center items-center bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">{{
                                                page }}</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div>
                </div>
            </div>
        </div><!--end container-->

        <div class="container md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Here's why
                    you'll
                    love it Alfajirijobs</h3>

                <p class="text-slate-400 max-w-xl mx-auto">Explore numerous job opportunities, gain personalized
                    insights, and access comprehensive company details within our extensive database.</p>

            </div><!--end grid-->

            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                <div
                    class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                    <div
                        class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                        <Icon name="uil:phone" class="text-[30px] text-emerald-600 group-hover:text-white" />
                    </div>

                    <div class="mt-4">
                        <NuxtLink to="/aboutus"
                            class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">24/7
                            Support</NuxtLink>
                        <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
                        <NuxtLink to="/aboutus" class="hover:text-emerald-600 font-medium transition-all duration-500">
                            Read More
                            <Icon name="uil:arrow-right" class="text-emerald-600" />
                        </NuxtLink>
                    </div>
                </div><!--end content-->

                <div
                    class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                    <div
                        class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                        <Icon name="uil:atom" class="text-[30px] text-emerald-600 group-hover:text-white" />
                    </div>

                    <div class="mt-4">
                        <NuxtLink to="/aboutus"
                            class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Tech
                            & Startup Jobs</NuxtLink>
                        <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
                        <NuxtLink to="/aboutus" class="hover:text-emerald-600 font-medium transition-all duration-500">
                            Read More
                            <Icon name="uil:arrow-right" class="text-emerald-600" />
                        </NuxtLink>
                    </div>
                </div><!--end content-->

                <div
                    class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                    <div
                        class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                        <Icon name="uil:user-arrows" class="text-[30px] text-emerald-600 group-hover:text-white" />
                    </div>

                    <div class="mt-4">
                        <NuxtLink to="/aboutus"
                            class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Quick &
                            Easy</NuxtLink>

                        <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
                        <NuxtLink to="/aboutus" class="hover:text-emerald-600 font-medium transition-all duration-500">
                            Read More
                            <Icon name="uil:arrow-right" class="text-emerald-600" />
                        </NuxtLink>
                    </div>
                </div><!--end content-->

                <div
                    class="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                    <div
                        class="size-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                        <Icon name="uil:hourglass" class="text-[30px] text-emerald-600 group-hover:text-white" />
                    </div>

                    <div class="mt-4">
                        <NuxtLink to="/aboutus"
                            class="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">Save
                            Time</NuxtLink>
                        <p class="text-slate-400 mt-3 mb-2">Many desktop publishing now use and a search for job.</p>
                        <NuxtLink to="/aboutus" class="hover:text-emerald-600 font-medium transition-all duration-500">
                            Read More
                            <Icon name="uil:arrow-right" class="text-emerald-600" />
                        </NuxtLink>
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
                                    <h3 class="text-2xl font-semibold text-black dark:text-white mb-4">Add a new job for
                                        free!
                                    </h3>
                                    <p class="text-slate-400 max-w-xl">
                                        Get ready to find your next superstar team member when you post a job vacancy on
                                        our platform! It's a breeze to add a new job listing, and it won't cost you a
                                        dime. Join us today and tap into a pool of top-notch talent ready to bring fresh
                                        energy to your team!
                                    </p>
                                </div>
                            </div><!--end col-->

                            <div class="lg:col-span-4 md:col-span-5">
                                <div class="text-end relative z-1">
                                    <NuxtLink to="/companies/add-job"
                                        class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">
                                        Add
                                        Job</NuxtLink>
                                    <NuxtLink to="/aboutus"
                                        class="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">
                                        Learn
                                        More</NuxtLink>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->

                        <div class="absolute -top-5 -start-5">
                            <div>
                                <Icon name="uil-envelope"
                                    class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45" />
                            </div>
                        </div>

                        <div class="absolute -bottom-5 -end-5">
                            <div>
                                <Icon name="uil-pen"
                                    class="lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-90 rtl:rotate-90" />
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Form, Field } from 'vee-validate'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const jobStore = useJobStore()
const route = useRoute()

const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)

const { loading, error, paginatedJobs, totalPages, currentPage } = storeToRefs(jobStore)


const searchTitle = ref('')
const selectedCategory = ref('')
const selectedLocation = ref('')
const submitting = ref(false)

// setCurrentPage needs to be a function, so you need to wrap it in a function call.

const setCurrentPage = (page) => {
    jobStore.setCurrentPage(page)
}

const performSearch = async () => {
    submitting.value = true
    try {
        await jobStore.fetchJobs({
            title: searchTitle.value,
            location: selectedLocation.value,
            category: selectedCategory.value,
        })
    } catch (error) {
        console.log(error)
    } finally {
        submitting.value = false
    }
}

const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

const debouncedSearch = debounce(performSearch, 3000)

watch(searchTitle, debouncedSearch)

onMounted(async () => {
    await jobStore.fetchJobs()
    await categoryStore.fetchCategories()
    await locationStore.fetchLocations()
})
</script>