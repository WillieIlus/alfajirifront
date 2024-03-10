<template>
  <section
    class="h-screen flex items-center justify-center relative overflow-hidden bg-[url('../../assets/images/hero/bg3.jpg')] bg-no-repeat bg-center bg-cover">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
    <div class="container">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div class="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
          <div class="p-6">
            <a href="">
              <img src="assets/images/logo-dark.png" class="mx-auto h-[24px] block dark:hidden" alt="">
              <img src="assets/images/logo-light.png" class="mx-auto h-[24px] dark:block hidden" alt="">
            </a>
            <h5 class="my-6 text-xl font-semibold">Login</h5>
            <Form @submit="onSubmit" :validation-schema="schema" class="text-start">
              <!-- lets use Field -->
              <div class="grid grid-cols-1">
                <div class="mb-4 text-start">
                  <label class="font-semibold" for="LoginEmail">Email Address:</label>
                  <Field v-model="email" type="email" name="email" class="form-input mt-3 rounded-md" placeholder="name@example.com"/>
                  <ErrorMessage name="email" class="text-red-500" />
                </div>
                <div class="mb-4 text-start">
                  <label class="font-semibold" for="LoginPassword">Password:</label>
                  <Field v-model="password" type="password" name="password" class="form-input mt-3 rounded-md" placeholder="Password:"/>
                  <ErrorMessage name="password" class="text-red-500" />
                </div>

                <div class="flex justify-between mb-4">
                  <div class="inline-flex items-center mb-0">
                    <input
                      class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                      type="checkbox" value="" id="RememberMe">
                    <label class="form-checkbox-label text-slate-400" for="RememberMe">Remember me</label>
                  </div>
                  <p class="text-slate text-slate-400 mb-0"><NuxtLink to="/forgetpassword" class="text-slate-400"> Forgot password ?</NuxtLink></p>
                </div>

                <div class="mb-4">
                  <button type="submit"
                    class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full"
                    :disabled="submitting">Login / Sign in</button>
                </div>

                <div class="mb-4 text-center">
                  <span class="text-slate-400 me-2">Don't have an account ?</span> <NuxtLink to="/signup"
                    class="text-black dark:text-white font-bold">Sign Up</NuxtLink>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section><!--end section -->
</template>

<script setup>
import { ref } from 'vue'

import { Form } from 'vee-validate'
import * as Yup from 'yup'

import { useAccountStore } from '~/store/accounts';
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'auth'
})

const accountStore = useAccountStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const submitting = ref(false)
const error = ref('') // Add error ref to store and display errors

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
})

const onSubmit = async (values) => {
  submitting.value = true
  try {
    console.log('Submitting login...');
    await accountStore.login(values.email, values.password);
    console.log('Login successful');
    router.push('/accounts/dashboard');
  } catch (error) {
    console.log(error)
    // Handle error with status code 401
    if (error.response && error.response.status === 401) {
      error.value = 'Invalid email or password'; // Set the error message
    } else {
      error.value = 'An error occurred. Please try again.'; // Set the error message for other errors
    }
    console.log(error.value);
  } finally {
    submitting.value = false;
  }
}
</script>
