<template>
    <!-- lets rewrite the above code to be nuxt friendly-->
    <div>
        <footer class="relative bg-slate-900 dark:bg-slate-800">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div class="relative py-12">
                        <!-- Subscribe -->
                        <div class="relative w-full">
                            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div class="md:col-span-3">
                                    <NuxtLink to="/" class="flex justify-center md:justify-start focus:outline-none">
                                        <img src="~/assets/images/logo-light.png" class="" alt="logo" />
                                    </NuxtLink>
                                </div>
                                <div class="md:col-span-9">
                                    <ul class="list-disc footer-list md:text-end text-center space-x-3">
                                        <li class="inline-block">
                                            <NuxtLink to="/"
                                                class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">
                                                Home</NuxtLink>
                                        </li>
                                        <li class="inline-block mt-[10px] md:mt-0">
                                            <NuxtLink to="/services"
                                                class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">
                                                How it works</NuxtLink>
                                        </li>
                                        <li class="inline-block mt-[10px] md:mt-0">
                                            <NuxtLink to="/jobs/create"
                                                class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">
                                                Create a job</NuxtLink>
                                        </li>
                                        <li class="inline-block mt-[10px] md:mt-0">
                                            <NuxtLink to="/about-us"
                                                class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">
                                                About us</NuxtLink>
                                        </li>
                                        <li class="inline-block mt-[10px] md:mt-0">
                                            <NuxtLink to="/contact-us"
                                                class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out font-medium">
                                                Contact us</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div class="container text-center">
                    <div class="grid md:grid-cols-2 items-center gap-6">
                        <div class="md:text-start text-center">
                            <p class="mb-0 text-gray-300 font-medium">© {{ year }} alfajirijobs. Design with <Icon name="mdi:heart"  color="red"/> by <NuxtLink to="https://kaskazinisolutions.com/"
                                    target="_blank" class="text-reset">Kaskazinisolutions</NuxtLink>.</p>
                        </div>
                        <ul class="list-none md:text-end text-center space-x-0.5">
                            <li class="inline">
                                <NuxtLink to="http://linkedin.com/company/alfajirijobs" target="_blank"
                                    class="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white">
                                    <Icon name="uil:linkedin" size="24px" color="white" />
                                </NuxtLink>
                            </li>
                            <li class="inline">
                                <NuxtLink to="https://www.facebook.com/alfajirijobs" target="_blank"
                                    class="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white">
                                    <Icon name="uil:facebook-f" size="24px" color="white" />
                                </NuxtLink>
                            </li>
                            <li class="inline">
                                <NuxtLink to="https://www.instagram.com/alfajirijobs/" target="_blank"
                                    class="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white">
                                    <Icon name="uil:instagram" size="24px" color="white" />
                                </NuxtLink>
                            </li>
                            <li class="inline">
                                <NuxtLink to="https://twitter.com/alfajirijobs" target="_blank"
                                    class="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white">
                                    <Icon name="uil:twitter" size="24px" color="white" />
                                </NuxtLink>
                            </li>
                            <li class="inline">
                                <NuxtLink to="mailto: alfajirijobs@gmail.com"
                                    class="btn btn-icon btn-sm border-2 border-gray-800 dark:border-gray-700 rounded-md hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white">
                                    <Icon name="uil:envelope" size="24px" color="white" />
                                </NuxtLink>
                            </li>
                        </ul><!--end icon-->
                    </div><!--end grid-->
                </div><!--end container-->
            </div>
        </footer>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const year = ref(new Date().getFullYear())

</script>
