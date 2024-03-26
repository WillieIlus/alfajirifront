<template>
  <!-- Start  -->
  <section class="relative bg-slate-50 dark:bg-slate-800 lg:py-24 py-16">
    <div class="container">
      <div class="lg:flex justify-center">
        <div class="lg:w-2/3">
          <div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
            <Form @submit="onSubmit" :validation-schema="schema" class="text-start">
              <div class="grid grid-cols-1">
                <h5 class="text-lg font-semibold">Add Country:</h5>
              </div>
              <div class="grid grid-cols-12 gap-4 mt-4">
                <div class="col-span-12 text-start">
                  <label class="font-semibold" for="RegisterName">Country Name:</label>
                  <Field v-model="name" type="text" name="name"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="Tanzania" />
                  <ErrorMessage name="name" class="text-red-500" />
                </div>
                <div class="col-span-12 text-start">
                  <label class="font-semibold" for="RegisterName">Country Code:</label>
                  <Field v-model="code" type="text" name="code"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" placeholder="TZ" />
                  <ErrorMessage name="code" class="text-red-500" />
                </div>
                <div class="col-span-12 text-start">
                  <label class="font-semibold" for="RegisterName">Country Flag:</label>
                  <input type="file" @change="onFileChange" name="flag"
                    class="form-input border border-slate-100 dark:border-slate-800 mt-1" />
                  <ErrorMessage name="flag" class="text-red-500" />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 mt-4 flex">
                <div v-if="successMessage" class="text-green-600 dark:text-green-400">{{ successMessage }}</div>
                <div v-if="errorMessage" class="text-red-600 dark:text-red-400">{{ errorMessage }}</div>
              </div>

              <div class="grid grid-cols-1 gap-4 mt-4 gap-x-3 ">
                <div>
                  <button type="submit"
                    class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">
                    <span v-if="submitting">Submitting ... </span>
                    <span v-else>Post Now </span>
                  </button>
                  <button @click="router.push('/locations')"
                    class="btn rounded-md bg-gray-200 hover:bg-gray-300 border-gray-200 hover:border-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-100">Cancel</button>

                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End  -->

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

import { useCountriesStore } from '~/store/countries'
import { useAccountStore } from '~/store/accounts'

const router = useRouter()

const countriesStore = useCountriesStore()
const accountStore = useAccountStore()

const { user, isLoggedIn } = accountStore

const successMessage = ref('')
const errorMessage = ref('')
const name = ref('')
const code = ref('')
const flag = ref(null)

const onFileChange = (e) => {
  flag.value = e.target.files[0]
  console.log('file changed:', flag.value)
}

const schema = yup.object({
  name: yup.string().required(),
  code: yup.string(), //.required("Country code is required"),
  flag: yup.mixed()
})

const submitting = ref(false)

const onSubmit = async (values) => {
  submitting.value = true
  console.log('values:', values.name, values.code, flag.value)
  try {
    const data = new FormData()
    data.append('name', values.name)
    data.append('code', values.code)
    data.append('flag', flag.value)
    console.log('data:', data)
    await countriesStore.createCountry(data);
    console.log('Country created successfully');
    successMessage.value = 'Country created successfully'
    setTimeout(() => {
      successMessage.value = ''
      router.push('/locations/countries')
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
  { label: 'Countries', to: '/locations/countries' },
  { label: 'Create Country', to: '/Country/create' }
];

const pageTitle = 'Add Country';

onMounted(() => {
  if (!isLoggedIn) {
    router.push('/login')
  }
})

</script>
