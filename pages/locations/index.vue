<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useLocationStore } from '@/store/locations';
import { useRouter } from 'vue-router';

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Locations',
    to: '/locations',
  },
]

const pageTitle = 'Locations'

const locationStore = useLocationStore();
const { locations, loading, error } = storeToRefs(locationStore);
const router = useRouter();

onMounted(() => {
  locationStore.fetchLocations();
});

</script>

