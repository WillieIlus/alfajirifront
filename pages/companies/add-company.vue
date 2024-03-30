<template>
  <!-- Start Hero -->
  <section class="relative table w-full py-36 bg-[url('../../assets/images/hero-bg.jpg')] bg-cover bg-center">
    <div class="absolute inset-0 bg-emerald-900/90"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-10">
        <h3 class="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Create Job
        </h3>
      </div><!--end grid-->
    </div><!--end container-->

    <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
      <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          <NuxtLink to="/companies">Companies</NuxtLink>
        </li>
        <li
          class="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white">
          Create Company
        </li>
      </ul>
    </div>
  </section><!-- end section-->
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
          <div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
            <Form @submit="onSubmit" :validation-schema="schema" class="text-start">
              <div class="grid grid-cols-1">
                <h5 class="text-lg font-semibold">Company Details:</h5>
              </div>

              <div class="grid grid-cols-12 gap-4 mt-4">
                <div class="col-span-12 text-start">
                  <label class="font-semibold" for="RegisterName">Company Name:</label>
                  <Field v-model="name" type="text" name="name"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Alfajiri Jobs" />
                  <ErrorMessage name="name" class="text-rose-500" />
                </div>
                <div class="col-span-12 text-start">
                  <label for="comments" class="font-semibold">Company Description:</label>
                  <Field as="textarea" v-model="description" name="description" id="description"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1 textarea"
                    placeholder="Write Company Description :"></Field>
                  <ErrorMessage name="description" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Email:</label>
                  <Field v-model="email" type="email" name="email"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Email" />
                  <ErrorMessage name="email" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Phone:</label>
                  <Field v-model="phone" type="text" name="phone"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Phone" />
                  <ErrorMessage name="phone" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Address:</label>
                  <Field v-model="address" type="text" name="address"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Address" />
                  <ErrorMessage name="address" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Website:</label>
                  <Field v-model="website" type="text" name="website"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Website" />
                  <ErrorMessage name="company" class="text-rose-500" />
                </div>
                <!-- <div class="grid grid-cols-12">
                  <h5 class="text-lg font-semibold">Location & Category:</h5>
                </div> -->
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Location:</label>
                  <Field as="select" v-model="location" name="location"
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                    <option value="">Select Location</option>
                    <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}
                    </option>
                  </Field>
                  <ErrorMessage name="location" class="text-rose-500" />
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Category:</label>
                  <Field as="select" v-model="category" name="category"
                    class="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                    <option value="">Select Category</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}
                    </option>
                  </Field>
                  <ErrorMessage name="category" class="text-rose-500" />
                </div>
                <!-- <div class="grid grid-cols-12">
                  <h5 class="text-lg font-semibold">Upload Logo & Cover:</h5>
                </div> -->

                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Upload Logo:</label>
                  <input type="file" @change="onLogoChange"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Upload Logo ">
                </div>
                <div class="md:col-span-6 col-span-12 text-start">
                  <label class="font-semibold">Upload Cover:</label>
                  <input type="file" @change="onCoverChange"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Upload Cover ">
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
                    class="btn rounded-md bg-gray-200 hover:bg-gray-300 border-gray-200 hover:border-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-100 mx-3">Cancel</button>

                </div>
              </div>
            </Form><!--end form-->
          </div>
        </div>
      </div><!--end flex-->
    </div><!--end container-->
  </section><!--end section-->
  <!-- End -->
</template>
<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useCompanyStore } from '~/store/companies';
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'

const companyStore = useCompanyStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()

const { loading, error } = storeToRefs(companyStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)
const { user } = storeToRefs(accountStore)

const successMessage = ref('')
const errorMessage = ref('')
const submitting = ref(false)

const router = useRouter()
const fetchCompanies = async () => {
  await companyStore.fetchCompanies()
}
const fetchCategories = async () => {
  await categoryStore.fetchCategories()
}
const fetchLocations = async () => {
  await locationStore.fetchLocations()
}
const getUser = async () => {
  await accountStore.getUser()
}
const name = ref('')
const description = ref('')
const phone = ref('')
const website = ref('')
const email = ref('')
const address = ref('')
const category = ref('')
const location = ref('')
const logo = ref(null)
const cover = ref(null)

const onLogoChange = (e) => {
  logo.value = e.target.files[0]
}
const onCoverChange = (e) => {
  cover.value = e.target.files[0]
}

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string(),
  email: yup.string().required(),
  address: yup.string(),
  category: yup.string(),//.required(),
  location: yup.string(),//.required(),
  logo: yup.mixed(),
  cover: yup.mixed()
})

const onSubmit = async (values) => {
  submitting.value = true
  console.log('values:', values.name, values.description, values.phone, values.website, values.email, values.address, values.category, values.location, logo.value, cover.value)
  try {
    const data = new FormData()
    data.append('name', values.name)
    data.append('description', values.description)
    data.append('phone', values.phone)
    data.append('website', values.website)
    data.append('email', values.email)
    data.append('address', values.address)
    data.append('category', values.category)
    data.append('location', values.location)
    data.append('logo', logo.value)
    data.append('cover', cover.value)
    console.log('data:', data)
    await companyStore.createCompany(data);
    console.log('Company created successfully');
    successMessage.value = 'Company created successfully'
    setTimeout(() => {
      successMessage.value = ''
      router.push('/companies')
    }, 5000)
  } catch (error) {
    console.log(error)
    errorMessage.value = 'An error occurred. Please try again.'
  } finally {
    submitting.value = false
  }
}

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Companies', to: '/companies' },
  { label: 'Create Company', to: '/Company/form' }
];

const pageTitle = 'Create Company';

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/login')
  }
  fetchCompanies()
  fetchCategories()
  fetchLocations()
  getUser()
})

</script>