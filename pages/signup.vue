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
            <h5 class="my-6 text-xl font-semibold">Signup</h5>
            <Form @submit="onSubmit" :validation-schema="schema" class="text-start">
              <div class="grid grid-cols-1">
                <div class="mb-4 text-start">
                  <label class="font-semibold" for="RegisterName">Your Name:</label>
                  <Field v-model="first_name" type="text" name="first_name" class="form-input mt-3 rounded-md" placeholder="Harry"/>
                </div>

                <div class="mb-4 text-start">
                  <label class="font-semibold" for="LoginEmail">Email Address:</label>
                  <Field v-model="email" type="email" name="email" class="form-input mt-3 rounded-md" placeholder="name@example.com"/>
                </div>

                <div class="mb-4 text-start">
                  <label class="font-semibold" for="LoginPassword">Password:</label>
                  <Field v-model="password" type="password" name="password" class="form-input mt-3 rounded-md" placeholder="Password:"/>
                </div>

                <div class="mb-4">
                  <div class="flex items-center mb-0">
                    <input
                      class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                      type="checkbox" value="" id="Accept:T&C">
                      <label class="form-checkbox-label text-slate-400" for="Accept:T&C">I Accept <NuxtLink to="/terms" class="text-emerald-600">Terms And Condition</NuxtLink></label>
                  </div>
                </div>

                <div class="mb-4">
                  <div class="flex items center mb-0">
                    <input
                      class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50 me-2"
                      type="checkbox" value="" id="Accept:PrivacyPolicy">
                      <label class="form-checkbox-label text-slate-400" for="Accept:PrivacyPolicy">I Accept <NuxtLink to="/privacy" class="text-emerald-600">Privacy Policy</NuxtLink></label>
                  </div>
                </div>

                <div class="text-center">
                  <span class="text-slate-400 me-2">Already have an account ? </span> 
                  <NuxtLink to="/login"
                    class="text-black dark:text-white font-bold">Sign in</NuxtLink>
                </div>
              </div>
            </form>
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

const first_name = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const submitting = ref(false)
const error = ref(null) // Add error ref to store and display errors

const schema = Yup.object({
  first_name: Yup.string().min(3).required(),
  phone: Yup.string().min(6).max(15).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const onSubmit = async (values) => {
  submitting.value = true;
  try {
    console.log('Submitting signup...');
    await accountStore.signup(
      values.first_name,
      values.phone,
      values.email,
      values.password
    );
    console.log('Account created successfully');
    // Successful signup, navigate to login
  } catch (error) {
    console.log(error);

    // Handle error with status code 401
    if (error.response && error.response.status === 401) {
      error.value = 'Invalid input or account already exists'; // Display an error message
    } else {
      error.value = 'An error occurred. Please try again.'; // Handle other errors
    }
  } finally {
    submitting.value = false;

    // Only navigate if there's no error
    if (!error.value) {
      router.push('/accounts/login');
    }
  }
};
</script>
