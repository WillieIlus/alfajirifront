<template>
<!-- Hero Start -->
        <section class="relative h-screen flex justify-center items-center bg-[url('../../assets/images/hero/bg.jpg')]  bg-cover">
            <div class="absolute inset-0 bg-slate-900/30"></div>
            <div class="container z-1">
                <div class="grid grid-cols-1 text-center mt-10 relative">
                    <h4 class="lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 font-bold text-white">Find & Hire Experts <br> for any Job</h4>
                    <p class="text-white/50 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                
                    <div class="d-flex" id="reserve-form">
                        <div class="md:w-5/6 mx-auto">
                            <div class="lg:col-span-10 mt-8">
                                <div class="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                    <form action="#">
                                        <div class="registration-form text-dark text-start">
                                            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                <div class="filter-search-form relative filter-border">
                                                  <Icon name="uil:briefcase-alt" />
                                                    <input name="name" type="text" id="job-keyword" class="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords">
                                                </div>
    
                                                <div class="filter-search-form relative filter-border">
                                                  <Icon name="uil:location-point" />
                                                    <select class="form-select" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="GM">Gambia</option>
                                                    </select>
                                                </div>
    
                                                <input type="submit" id="search" name="search" style="height: 60px;" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search">
                                            </div><!--end grid-->
                                        </div><!--end container-->
                                    </form>
                                </div>
                            </div><!--ed col-->
                        </div>
                    </div><!--end grid-->

                    <div class="mt-4">
                        <span class="text-white/60"><span class="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Hero End -->

        <!-- Start -->
        <section class="relative md:py-24 py-16">
            <div class="container">
                <div class="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
                    <div class="lg:col-span-8 md:col-span-6">
                        <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Trending Services</h3>
                        <p class="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-7 relative">
                    <div class="tiny-five-item">
                        <div class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                <img src="assets/images/work/01.jpg" alt="">
                                <div class="absolute inset-0 bg-slate-900/50"></div>

                                <div class="absolute bottom-0 p-4">
                                    <a href="" class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Product & Branding Design</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                <img src="assets/images/work/02.jpg" alt="">
                                <div class="absolute inset-0 bg-slate-900/50"></div>

                                <div class="absolute bottom-0 p-4">
                                    <a href="" class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Wordpress Development</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                <img src="assets/images/work/03.jpg" alt="">
                                <div class="absolute inset-0 bg-slate-900/50"></div>

                                <div class="absolute bottom-0 p-4">
                                    <a href="" class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Audio & Video Editing</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                <img src="assets/images/work/04.jpg" alt="">
                                <div class="absolute inset-0 bg-slate-900/50"></div>

                                <div class="absolute bottom-0 p-4">
                                    <a href="" class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Admin & Customer Support</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                <img src="assets/images/work/05.jpg" alt="">
                                <div class="absolute inset-0 bg-slate-900/50"></div>

                                <div class="absolute bottom-0 p-4">
                                    <a href="" class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">UX / UI Designer</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tiny-slide">
                            <div class="group relative overflow-hidden rounded-md shadow dark:shadow-gray-700 transition duration-500 m-1">
                                <img src="assets/images/work/06.jpg" alt="">
                                <div class="absolute inset-0 bg-slate-900/50"></div>

                                <div class="absolute bottom-0 p-4">
                                    <a href="" class="text-lg font-semibold text-white hover:text-emerald-600 transition-all duration-500">Digital Marketing</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--grid-->
            </div><!--end container-->

            <div class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-8 gap-[30px]">
                    <div class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div class="flex items-center">
                            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src="assets/images/company/facebook-logo.png" class="size-8"  alt="">
                            </div>
                            <a href="job-detail-one.html" class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Web Designer</a>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-4">
                            <span class="block"><span class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Full Time</span></span>
                            <span class="block text-slate-400 text-sm md:mt-1 mt-0"><i class="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-2">
                            <span class="text-slate-400"><i class="uil uil-map-marker"></i> Australia</span>
                            <span class="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>

                        <div class="md:mt-0 mt-4">
                            <a href="" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><i data-feather="bookmark" class="size-4"></i></a>
                            <a href="job-apply.html" class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>

                        <span class="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1"><Icon name="uil:uil-star" /></span>
                    </div><!--end content-->
                    
                    <div class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div class="flex items-center">
                            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src="assets/images/company/google-logo.png" class="size-8"  alt="">
                            </div>
                            <a href="job-detail-one.html" class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Marketing Director</a>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-4">
                            <span class="block"><span class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
                            <span class="block text-slate-400 text-sm md:mt-1 mt-0"><i class="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-2">
                            <span class="text-slate-400"><i class="uil uil-map-marker"></i> USA</span>
                            <span class="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>

                        <div class="md:mt-0 mt-4">
                            <a href="" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><i data-feather="bookmark" class="size-4"></i></a>
                            <a href="job-apply.html" class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                    </div><!--end content-->
                    
                    <div class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div class="flex items-center">
                            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src="assets/images/company/android.png" class="size-8"  alt="">
                            </div>
                            <a href="job-detail-one.html" class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">App Developer</a>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-4">
                            <span class="block"><span class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Remote</span></span>
                            <span class="block text-slate-400 text-sm md:mt-1 mt-0"><i class="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-2">
                            <span class="text-slate-400"><i class="uil uil-map-marker"></i> China</span>
                            <span class="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>

                        <div class="md:mt-0 mt-4">
                            <a href="" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><i data-feather="bookmark" class="size-4"></i></a>
                            <a href="job-apply.html" class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                    </div><!--end content-->
                    
                    <div class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div class="flex items-center">
                            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src="assets/images/company/lenovo-logo.png" class="size-8"  alt="">
                            </div>
                            <a href="job-detail-one.html" class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Product Designer</a>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-4">
                            <span class="block"><span class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">WFH</span></span>
                            <span class="block text-slate-400 text-sm md:mt-1 mt-0"><i class="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-2">
                            <span class="text-slate-400"><i class="uil uil-map-marker"></i> Dubai</span>
                            <span class="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>

                        <div class="md:mt-0 mt-4">
                            <a href="" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><i data-feather="bookmark" class="size-4"></i></a>
                            <a href="job-apply.html" class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                    </div><!--end content-->
                    
                    <div class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div class="flex items-center">
                            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src="assets/images/company/spotify.png" class="size-8"  alt="">
                            </div>
                            <a href="job-detail-one.html" class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">C++ Developer</a>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-4">
                            <span class="block"><span class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Full Time</span></span>
                            <span class="block text-slate-400 text-sm md:mt-1 mt-0"><i class="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-2">
                            <span class="text-slate-400"><i class="uil uil-map-marker"></i> India</span>
                            <span class="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>

                        <div class="md:mt-0 mt-4">
                            <a href="" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><i data-feather="bookmark" class="size-4"></i></a>
                            <a href="job-apply.html" class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>

                        <span class="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1"><i class="uil uil-star"></i></span>
                    </div><!--end content-->
                    
                    <div class="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5">
                        <div class="flex items-center">
                            <div class="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <img src="assets/images/company/linkedin.png" class="size-8"  alt="">
                            </div>
                            <a href="job-detail-one.html" class="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Php Developer</a>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-4">
                            <span class="block"><span class="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Remote</span></span>
                            <span class="block text-slate-400 text-sm md:mt-1 mt-0"><i class="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>

                        <div class="md:block flex justify-between md:mt-0 mt-2">
                            <span class="text-slate-400"><i class="uil uil-map-marker"></i> Pakistan</span>
                            <span class="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>

                        <div class="md:mt-0 mt-4">
                            <a href="" class="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><i data-feather="bookmark" class="size-4"></i></a>
                            <a href="job-apply.html" class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>

                        <span class="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1"><i class="uil uil-star"></i></span>
                    </div><!--end content-->
                </div><!--end grid-->

                <div class="grid md:grid-cols-1 grid-cols-1 mt-8">
                    <div class="md:col-span-12 text-center">
                        <a href="job-grid-two.html" class="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Jobs <i class="uil uil-arrow-right align-middle"></i></a>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1">
                    <div class="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
                        <div class="grid md:grid-cols-2 items-center gap-[30px]">
                            <div class="relative">
                                <img src="assets/images/about/ab05.jpg" alt="">
                                <div class="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                                    <a href="#!" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div class="text-white p-4">
                                    <h4 class="leading-normal text-4xl mb-3 font-semibold">Get the job of your <br> dreams quickly.</h4>
    
                                    <p class="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
    
                                    <ul class="list-none text-white/50 mt-4">
                                        <li class="mb-1 flex"><i class="uil uil-check-circle text-white text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                        <li class="mb-1 flex"><i class="uil uil-check-circle text-white text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                                        <li class="mb-1 flex"><i class="uil uil-check-circle text-white text-xl me-2"></i> Create your own skin to match your brand</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->

            <div class="container md:mt-24 mt-16">
                <div class="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span class="counter-value" data-target="1548">1010</span>K+</h1>
                        <h5 class="counter-head text-sm font-semibold text-slate-400 uppercase">Job Fulfillment</h5>
                    </div><!--end counter box-->
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span class="counter-value" data-target="25">2</span>+</h1>
                        <h5 class="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
                    </div><!--end counter box-->
                    
                    <div class="counter-box text-center">
                        <h1 class="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><span class="counter-value" data-target="9">0</span>+</h1>
                        <h5 class="counter-head text-sm font-semibold text-slate-400 uppercase">Years Experience</h5>
                    </div><!--end counter box-->
                </div>
            </div><!--end container-->

            <div class="container md:mt-24 md:pb-16 mt-16">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                        <div class="relative">
                            <div class="relative flex justify-end">
                                <img src="assets/images/about/ab03.jpg" class="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="">
                                <div class="absolute top-0 translate-y-2/4 start-0 text-center">
                                    <a href="#!" data-type="youtube" data-id="S_CGed6E610" class="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="absolute md:-start-5 start-0 -bottom-16">
                                <img src="assets/images/about/ab04.jpg" class="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="">
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
                        <div class="lg:me-5">
                            <h3 class="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Find Best Companies.</h3>

                            <p class="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                            <div class="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                                <div class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div class="flex items-center">
                                        <div class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src="assets/images/company/spotify.png" class="size-8"  alt="">
                                        </div>
        
                                        <div class="ms-3">
                                            <a href="employer-detail.html" class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Spotify</a>
                                            <span class="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div class="flex items-center">
                                    <div class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src="assets/images/company/facebook-logo.png" class="size-8"  alt="">
                                    </div>

                                    <div class="ms-3">
                                        <a href="employer-detail.html" class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Facebook</a>
                                            <span class="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div class="flex items-center">
                                    <div class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src="assets/images/company/google-logo.png" class="size-8"  alt="">
                                    </div>

                                    <div class="ms-3">
                                        <a href="employer-detail.html" class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Google</a>
                                            <span class="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div class="flex items-center">
                                    <div class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src="assets/images/company/android.png" class="size-8"  alt="">
                                    </div>

                                    <div class="ms-3">
                                        <a href="employer-detail.html" class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Android</a>
                                            <span class="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div class="flex items-center">
                                    <div class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src="assets/images/company/lenovo-logo.png" class="size-8"  alt="">
                                    </div>

                                    <div class="ms-3">
                                        <a href="employer-detail.html" class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Lenovo</a>
                                            <span class="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800">
                                    <div class="flex items-center">
                                    <div class="size-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src="assets/images/company/linkedin.png" class="size-8"  alt="">
                                    </div>

                                    <div class="ms-3">
                                        <a href="employer-detail.html" class="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">Linkedin</a>
                                            <span class="block text-sm text-emerald-600">5 Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid md:grid-cols-12 grid-cols-1 mt-6">
                                <div class="md:col-span-12">
                                    <a href="" class="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Companies <i class="uil uil-arrow-right align-middle"></i></a>
                                </div>
                            </div><!--end grid-->
                        </div>
                    </div>
                </div>
            </div><!--end container-->

            <div class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h3 class="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Questions & Answers</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div><!--end grid-->

                <div class="grid md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    <div class="flex">
                        <i data-feather="help-circle" class="h-8 text-emerald-600 me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-lg font-semibold">How our <span class="text-emerald-600">Jobstack</span> work ?</h5>
                            <p class="text-slate-400">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <i data-feather="help-circle" class="h-8 text-emerald-600 me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-lg font-semibold"> What is the main process open account ?</h5>
                            <p class="text-slate-400">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <i data-feather="help-circle" class="h-8 text-emerald-600 me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-lg font-semibold"> How to make unlimited data entry ?</h5>
                            <p class="text-slate-400">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                        </div>
                    </div>
                    
                    <div class="flex">
                        <i data-feather="help-circle" class="h-8 text-emerald-600 me-3"></i>
                        <div class="flex-1">
                            <h5 class="mb-2 text-lg font-semibold"> Is <span class="text-emerald-600">Jobstack</span> safer to use with my account ?</h5>
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                        </div>
                    </div>
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
                                </div><!--end col-->
            
                                <div class="lg:col-span-4 md:col-span-5">
                                    <div class="text-end relative z-1">
                                        <a href="employer-detail.html" class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">Apply Now</a>
                                        <a href="aboutus.html" class="btn bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-md ms-2">Learn More</a>
                                    </div>
                                </div><!--end col-->
                            </div><!--end grid-->
            
                            <div class="absolute -top-5 -start-5">
                                <div class="uil uil-envelope lg:text-[150px] text-7xl text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"></div>
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

</template><script setup>
import { onMounted } from 'vue'
import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()

router.push('/jobs')

const categoryStore = useCategoryStore();
const jobStore = useJobStore()
const { paginatedJobs } = storeToRefs(jobStore)
const { paginatedCategories } = storeToRefs(categoryStore);

onMounted(async () => {
  await jobStore.fetchJobs()
  await categoryStore.fetchCategories();
});
</script>