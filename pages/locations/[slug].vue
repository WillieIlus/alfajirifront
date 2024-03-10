<script setup>
import { storeToRefs } from 'pinia';
import { useLocationStore } from '@/store/locations';
import { useRouter, useRoute } from 'vue-router';

const locationStore = useLocationStore()

const { location, loading, error } = storeToRefs(locationStore)
const router = useRouter()
const route = useRoute()

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Locations',
    to: '/locations',
  },
  {
    label: 'route.params.slug' || 'Location',
    to: route.fullPath,
  }
]

const pageTitle = 'route.params.slug' || 'Location'

const { fetchLocation } = locationStore;

onMounted(async () => {
  await fetchLocation(router.currentRoute.value.params.slug);
});


</script> 