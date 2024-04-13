<template>
  <!-- Start Hero -->
  <section class="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Post</h3>
      </div><!--end grid-->
    </div><!--end container-->

    <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
      <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <a href="index.html">Jobstack</a>
        </li>
        <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white"
          aria-current="page">Job Post</li>
      </ul>
    </div>
  </section><!--end section-->
  <div class="relative">
    <div
      class="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-slate-50 dark:text-slate-800">
      <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
  <!-- End Hero -->
  <!-- Start -->
  <section class="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
    <div class="container">
      <div class="lg:flex justify-center">
        <div class="lg:w-2/3">
          <div class="p-6 bg-white dark:bg-slate-900 shadow  dark:shadow-gray-700 rounded-md">
            <Form @submit="onSubmit" class="text-start">
              <div class="grid grid-cols-1 gap-6">
                <h5 class="text-lg font-semibold">Job Details:</h5>
              </div>
              <div class="grid grid-cols-12 gap-4 mt-4">
                <div class="col-span-12 text-start">
                  <label class="font-semibold" for="title">Job Title</label>
                  <Field v-model="title" type="text" name="title" id="title" placeholder="Enter job title"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" />
                  <ErrorMessage name="title" class="text-red-500 text-xs italic" />
                </div>
                <!-- add select for company  -->
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Company:</label>
                  <Field as="select" v-model="company" name="company"
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1"
                    @change="logSelectedCompany">
                    <option value="">Select Company</option>
                    <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}
                    </option>
                  </Field>
                  <ErrorMessage name="company" class="text-rose-500" />
                </div>
                <div class="col-span-12 text-start">
                  <label class="font-semibold" for="description">Job Description</label>
                  <Field as="textarea" v-model="description" name="description" id="description"
                    placeholder="Enter job description"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea" />
                  <ErrorMessage name="description" class="text-red-500 text-xs italic" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Location:</label>
                  <Field as="select" v-model="location" name="location"
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1"
                    @change="logSelectedLocation">
                    <option value="">Select Location</option>
                    <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}
                    </option>
                  </Field>
                  <ErrorMessage name="location" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Category:</label>
                  <Field as="select" v-model="category" name="category"
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1"
                    @change="logSelectedCategory">
                    <option value="">Select Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                    </option>
                  </Field>
                  <ErrorMessage name="category" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold" for="salary">Salary</label>
                  <Field v-model="salary" type="number" name="salary" id="salary" placeholder="Enter salary"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" />
                  <ErrorMessage name="salary" class="text-red-500 text-xs italic" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold" for="image">Image</label>
                  <input type="file" name="image" id="image" @change="onFileChange"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" />
                </div>
              </div>
              <div class="grid grid-cols-1 gap-4 mt-4">
                <div v-if="successMessage" class="text-green-500">{{ successMessage }}</div>
                <div v-if="errorMessage" class="text-rose-500">{{ errorMessage }}</div>
              </div>
              <div class="grid grid-cols-1 gap-4 mt-4 gap-x-3 ">
                <div>
                  <button type="submit"
                    class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mx-3">
                    <span v-if="submitting">Submitting ... </span>
                    <span v-else>Post Now </span>
                  </button>
                  <button @click="router.push('/locations')"
                    class="btn rounded-md bg-gray-200 hover:bg-gray-300 border-gray-200 hover:border-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-100 mx-3 ">Cancel</button>

                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div> <!--End Container-->
  </section>
  <!-- End -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate';

import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import * as yup from 'yup'

import { useJobStore } from '~/store/jobs'
import { useCompanyStore } from '~/store/companies'
import { useLocationStore } from '~/store/locations'
import { useCategoryStore } from '~/store/categories'
import { useAccountStore } from '~/store/accounts'

const router = useRouter()

const companyStore = useCompanyStore()
const locationStore = useLocationStore()
const categoryStore = useCategoryStore()
const jobStore = useJobStore()
const accountStore = useAccountStore()

const { companies } = storeToRefs(companyStore)
const { locations } = storeToRefs(locationStore)
const { categories } = storeToRefs(categoryStore)
const { user } = storeToRefs(accountStore)
const { job, jobs, error, laoding } = storeToRefs(jobStore)

const fetchCompanies = async () => {
  await companyStore.fetchCompanies()
}

const fetchLocations = async () => {
  await locationStore.fetchLocations()
}

const fetchCategories = async () => {
  await categoryStore.fetchCategories()
}

const getUser = async () => {
  await accountStore.getUser()
}

const title = ref('')
const description = ref('')
const salary = ref('')
const image = ref('')
const company = ref('')
const location = ref('')
const category = ref('')
const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const onFileChange = (e) => {
  const file = e.target.files[0]
  image.value = file
}

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  salary: yup.number(),
  company: yup.string().required(),
  location: yup.string(),
  category: yup.string(),
  image: yup.mixed()
})



const onSubmit = async (values) => {
  submitting.value = true; 
  try {
    const data = new FormData();
    data.append('title', values.title);
    data.append('company', values.company);
    data.append('location', values.location);
    data.append('category', values.category);
    data.append('description', values.description);
    data.append('salary', values.salary);
    if (image.value) {
      data.append('image', image.value);
    }
    // data.append('image', image.value);
    console.log('FormData:', data); // Log the FormData object being submitted
    await jobStore.createJob(data);
    successMessage.value = 'Job created successfully';
    // createFormData();
    setTimeout(() => {
      successMessage.value = 'redirecting to the job detail'
      router.push(`/jobs/`)
    }, 2000
    )

    submitting.value = false;
  } catch (error) {
    errorMessage.value = 'Failed to create job';
    submitting.value = false;
  }
};


onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/login')
  }
  fetchCompanies()
  fetchLocations()
  fetchCategories()
  getUser()
})

</script>
