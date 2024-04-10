<template>
  <div class="bg-transparent lg:bg-white lg:shadow-lg">
    <nav class="navbar" id="navbar">
      <div class="container mx-auto px-16 py-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <button @click="toggleNavbar" type="button" class="md:hidden mr-4" aria-expanded="false">
              <span v-if="isNavbarOpen" class="h-6 w-6 block bg-black">
                <Icon name="uil:bars" class="text-black" size="1.5em" />
              </span>
              <span v-else class="h-6 w-6 block bg-black">
                <Icon name="uil:cancel" class="text-black" size="1.5em" />
              </span>
            </button>
            <NuxtLink to="/" class="flex items-center">
              <img src="~/assets/images/logo-dark.png" alt="" class="h-8 lg:h-auto">
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div :class="{ 'hidden': !isNavbarOpen }" class="md:flex md:items-center">
              <ul class="flex" id="navigation-menu">
                <li v-for="item in navItems" :key="item.name" class="relative dropdown">
                  <button class="dropdown-toggle" data-bs-toggle="dropdown">
                    <NuxtLink :to="item.link" class="px-4 py-2">{{ item.name }}</NuxtLink>
                  </button>
                </li>
              </ul>
              <ul v-if="isLoggedIn" class="flex" id="navigation-menu">
                <li v-for="item in formNavigation" :key="item.name" class="relative dropdown">
                  <button class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mx-3" data-bs-toggle="dropdown">
                    <NuxtLink :to="item.link" class="px-4 py-2">{{ item.name }}</NuxtLink>
                  </button>
                </li>
              </ul>
              <!-- push a div to the right using Tailwind CSS,  -->
            </div>

            <div class="relative ">
              <button type="button" @click="toggleAuthbar" class="block flex items-center px-4 py-5 dropdown-toggle"
                id="page-header-user-dropdown" aria-haspopup="true" aria-expanded="true">
                <img class="h-8 w-8 rounded-full" src="~/assets/images/team/01.jpg"
                  alt="Header Avatar">
                <span class="lg:inline-block"></span>
              </button>
              <ul v-if="isAuthbarOpen" class="absolute top-auto z-50 w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20">

                <li v-for="item in authNavigation" :key="item.name" class="p-2 dropdown-item group/dropdown">
                  <NuxtLink v-if="!item.action" class="" :to="item.link">{{ item.name }}</NuxtLink>
                  <button v-else @click="item.action" class="">{{ item.name }}</button>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <!-- Mobile Menu -->
        <div :class="{ 'block': isNavbarOpen, 'hidden': !isNavbarOpen }"> <!--class="md:hidden"-->
          <ul class="flex flex-col" id="navigation-menu">
            <li v-for="item in navItems" :key="item.name" class="relative dropdown">
              <button class="dropdown-toggle" data-bs-toggle="dropdown">
                <NuxtLink :to="item.link" class="block px-4 py-2">{{ item.name }}</NuxtLink>
              </button>
            </li>
            <li v-if="isLoggedIn" v-for="item in formNavigation" :key="item.name" class="relative dropdown">
              <button class="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white m-3" data-bs-toggle="dropdown">
                <NuxtLink :to="item.link" class="block px-4 py-2">{{ item.name }}</NuxtLink>
              </button>
            </li>
            <li v-if="isLoggedIn" v-for="item in userNavigation" :key="item.name"
              class="p-2 dropdown-item group/dropdown">
              <NuxtLink v-if="!item.action" class="" :to="item.link">{{ item.name }}</NuxtLink>
              <button v-else @click="item.action" class="">{{ item.name }}</button>
            </li>
            <li v-if="!isLoggedIn" v-for="item in loginNavigation" :key="item.name"
              class="p-2 dropdown-item group/dropdown">
              <NuxtLink v-if="!item.action" class="" :to="item.link">{{ item.name }}</NuxtLink>
              <button v-else @click="item.action" class="">{{ item.name }}</button>
            </li>
          </ul>
        </div>
        <!-- End Mobile Menu -->
      </div>
    </nav>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useAccountStore } from '~/store/accounts';
import { useRouter } from 'vue-router'


const accountStore = useAccountStore()
const { user, isLoggedIn } = storeToRefs(accountStore)
const route = useRoute()
const router = useRouter()

const isNavbarOpen = ref(false)
const isAuthbarOpen = ref(false)

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value
};

const toggleAuthbar = () => {
  isAuthbarOpen.value = !isAuthbarOpen.value
}

const logout = async () => {
  try {
    await accountStore.logout()
    router.push('/login')
  } catch (error) {
    console.error('Failed to logout:', error)
  }
}

const login = async () => {
  try {
    await accountStore.login()
    router.push('/')
  } catch (error) {
    console.error('Failed to login:', error)
  }
}

const navItems = [
  { name: 'Home', link: '/', current: route.name === 'home' },
  { name: 'Jobs', link: '/jobs', current: route.name.includes('jobs') },
  { name: 'Companies', link: '/companies', current: route.name.includes('companies') },
  { name: 'Categories', link: '/categories', current: route.name.includes('categories') },
]

const authNavigation = computed(() => {
  return isLoggedIn.value ? userNavigation : loginNavigation;
})

const userNavigation = [
  { name: 'Profile', link: '/accounts/profile', current: route.name.includes('profile') },
  { name: 'Settings', link: '/accounts/settings', current: route.name.includes('settings') },
  { name: 'Logout', action: logout },
]

const formNavigation = [
  { name: 'Add Job', link: '/jobs/add-job', current: route.name.includes('add-job') },
  { name: 'Add Company', link: '/companies/add-company', current: route.name.includes('add-company') }
]

const loginNavigation = [
  { name: 'Login', link: '/login', current: route.name.includes('login') },
  { name: 'Register', link: '/signup', current: route.name.includes('register') },
]


onMounted(async () => {
  try {
    await accountStore.getUser();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  } finally {
  }
});

</script>
