<template>
  <nav id="topnav" class="defaultscroll is-sticky">
    <div class="container">
      <!-- Logo container -->
      <NuxtLink to="/" class="logo">
        <div class="block sm:hidden">
          <img src="~/assets/images/logo-icon-40.png" class="h-10 inline-block dark:hidden" alt="" />
          <img src="~/assets/images/logo-icon-40-white.png" class="h-10 hidden dark:inline-block" alt="" />
        </div>
        <div class="sm:block hidden">
          <span class="inline-block dark:hidden">
            <img src="~/assets/images/logo-dark.png" class="h-[24px] l-dark" alt="" />
            <img src="~/assets/images/logo-light.png" class="h-[24px] l-light" alt="" />
          </span>
          <img src="~/assets/images/logo-white.png" class="h-[24px] hidden dark:inline-block" alt="" />
        </div>
      </NuxtLink>
      <!-- End Logo container -->

      <!-- Start Mobile Toggle -->
      <div class="menu-extras">
        <div class="menu-item">
          <a class="navbar-toggle" id="isToggle" @click="toggleNavbar">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
      <!-- End Mobile Toggle -->

      <!-- Login button Start -->
      <ul class="buy-button list-none mb-0">
        <li class=inline-block mb-0>
          <div class="relative top-[3px]">
            <Icon name="uil:search" class="text-lg absolute top-[3px] end-3" />
            <input type="text"
              class="form-input h-9 pe-10 rounded-3xl sm:w-44 w-36 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900"
              name="s" id="searchItem" placeholder="Search..." />
          </div>
        </li>
        <li class="dropdown inline-block relative ps-1">
          <button data-dropdown-toggle="dropdown" class="dropdown-toggle items-center" type="button">
            <span
              class="btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white">
              <img src="~/assets/images/team/01.jpg" class="rounded-full" alt="" />
            </span>
          </button>
          <!-- Dropdown menu -->
          <div
            class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden"
            onclick="event.stopPropagation();">
            <ul class="py-2 text-start">
              <li>
                <NuxtLink to="/accounts/profile"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                  <Icon name="feather:user" class="size-4 me-2" />
                  Profile
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/accounts/settings"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                  <Icon name="feather:settings" class="size-4 me-2" />
                  Settings
                </NuxtLink>
              </li>
              <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
              <li>
                <a @click="logout"
                  class="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                  <Icon name="feather:log-out" class="size-4 me-2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- Login button End -->

      <div id="navigation">
        <!-- Navigation Menu -->
        <ul class="navigation-menu justify-end nav-light">
          <li class="has-submenu parent-menu-item">
            <NuxtLink to="/" class="sub-menu-item">Home</NuxtLink>
          </li>
          <li class="has-submenu parent-menu-item">
            <NuxtLink to="/jobs" class="sub-menu-item">Jobs</NuxtLink>
          </li>
          <li class="has-submenu parent-menu-item">
            <NuxtLink to="/companies" class="sub-menu-item">Companies</NuxtLink>
            <ul >

            </ul>
          </li>
          <li class="has-submenu parent-menu-item">
            <NuxtLink to="/categories" class="sub-menu-item">Categories</NuxtLink>
          </li>
        </ul>
        <!-- end navigation menu -->
      </div>
    </div>
  </nav>
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
  { name: 'Add Job', link: '/jobs/form', current: route.name.includes('add-job') },
  { name: 'Add Company', link: '/companies/form', current: route.name.includes('add-company') }
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
