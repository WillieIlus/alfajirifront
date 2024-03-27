<template>
  <div class="bg-transparent lg:bg-white lg:shadow-lg">
    <nav class="navbar" id="navbar">
      <div class="container mx-auto px-16 py-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <button @click="toggleNavbar" type="button" class="md:hidden mr-4" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <NuxtLink to="/" class="flex items-center">
              <img src="~/assets/images/logo-dark.png" alt="" class="h-8 lg:h-auto">
              <!-- <img src="~/assets/images/logo-light.png" alt="" class="h-8 lg:h-auto"> -->
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="relative dropdown">
              <button type="button" class="flex items-center px-4 py-5 dropdown-toggle" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <svg class="h-6 w-6 md:hidden" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                <img class="h-8 w-8 rounded-full md:hidden" src="https://plchldr.co/i/200x200?bg=808080&text=USER" alt="Header Avatar">
                <span class="hidden lg:inline-block"></span>
              </button>
              <ul class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20" id="profile/log" aria-labelledby="navNotifications">
                <li v-for="item in authNavigation" :key="item.name" class="p-2 dropdown-item group/dropdown">
                  <NuxtLink v-if="!item.action" class="" :to="item.link">{{ item.name }}</NuxtLink>
                  <button v-else @click="item.action" class="">{{ item.name }}</button>
                </li>
              </ul>
            </div>
            <div :class="{ 'hidden': !isNavbarOpen }" class="hidden lg:flex lg:items-center">
              <ul class="flex" id="navigation-menu">
                <li v-for="item in navItems" :key="item.name" class="relative dropdown">
                  <button class="dropdown-toggle" data-bs-toggle="dropdown">
                    <NuxtLink :to="item.link" class="px-4 py-2">{{ item.name }}</NuxtLink>
                  </button>
                  <ul class="dropdown-menu">
                    <li v-if="item.name === 'Jobs'" v-for="subItem in jobNavigation" :key="subItem.name" class="dropdown-item">
                      <NuxtLink :to="subItem.link">{{ subItem.name }}</NuxtLink>
                    </li>
                    <li v-if="item.name === 'Companies'" v-for="subItem in companyNavigation" :key="subItem.name" class="dropdown-item">
                      <NuxtLink :to="subItem.link">{{ subItem.name }}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul v-if="isLoggedIn" class="flex" id="navigation-menu">
                <li v-for="item in formNavigation" :key="item.name" class="relative dropdown">
                  <button class="dropdown-toggle" data-bs-toggle="dropdown">
                    <NuxtLink :to="item.link" class="px-4 py-2">{{ item.name }}</NuxtLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div :class="{ 'block': isNavbarOpen, 'hidden': !isNavbarOpen }" class="md:hidden">
          <ul class="flex flex-col" id="navigation-menu">
            <li v-for="item in navItems" :key="item.name" class="relative dropdown">
              <button class="dropdown-toggle" data-bs-toggle="dropdown">
                <NuxtLink :to="item.link" class="block px-4 py-2">{{ item.name }}</NuxtLink>
              </button>
              <ul class="dropdown-menu">
                <li v-if="item.name === 'Jobs'" v-for="subItem in jobNavigation" :key="subItem.name" class="dropdown-item">
                  <NuxtLink :to="subItem.link">{{ subItem.name }}</NuxtLink>
                </li>
                <li v-if="item.name === 'Companies'" v-for="subItem in companyNavigation" :key="subItem.name" class="dropdown-item">
                  <NuxtLink :to="subItem.link">{{ subItem.name }}</NuxtLink>
                </li>
              </ul>
            </li>
            <li v-if="isLoggedIn" v-for="item in formNavigation" :key="item.name" class="relative dropdown">
              <button class="dropdown-toggle" data-bs-toggle="dropdown">
                <NuxtLink :to="item.link" class="block px-4 py-2">{{ item.name }}</NuxtLink>
              </button>
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

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

const logout = async () => {
  try {
    await accountStore.logout()
    router.push('/accounts/login')
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
  { name: 'Login', link: '/accounts/login', current: route.name.includes('login') },
  { name: 'Register', link: '/accounts/signup', current: route.name.includes('register') },
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
