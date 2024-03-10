                 
<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useAccountStore } from '~/store/accounts'

const route = useRoute()
const router = useRouter()
const accountStore = useAccountStore()

const { user, loading, error } = accountStore

const successMessage = ref('')
const errorMessage = ref('')
const submitting = ref(false)

const getUser = async () => {
  await accountStore.getUser()
}

const updateUser = async () => {
  await accountStore.updateUser()
}

const email = ref('')
const first_name = ref('')
const last_name = ref('')
const middle_name = ref('')
const avatar = ref('')
const gender = ref('')
const phone = ref('')
const address = ref('')
const bio = ref('')
const website = ref('')

const genderChoices = [
  { value: 'M', label: 'Male' },
  { value: 'F', label: 'Female' },
  { value: 'O', label: 'Other' }
]

const onAvatarChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    avatar.value = e.target.result
  }
  reader.readAsDataURL(file)
}

const schema = yup.object({
  email: yup.string().email().required(),
  first_name: yup.string().required(),
  last_name: yup.string(),
  middle_name: yup.string(),
  avatar: yup.mixed(),
  gender: yup.string(),
  phone: yup.string(),
  address: yup.string(),
  bio: yup.string(),
  website: yup.string(),
})

const onSubmit = async () => {
  submitting.value = true
  try {
    const data = {
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      middle_name: middle_name.value,
      avatar: avatar.value,
      gender: gender.value,
      phone: phone.value,
      address: address.value,
      bio: bio.value,
      website: website.value,
    }
    await accountStore.updateUser(data)
    successMessage.value = 'Profile updated successfully'
    //reset form
    email.value = ''
    first_name.value = ''
    last_name.value = ''
    middle_name.value = ''
    avatar.value = ''
    gender.value = ''
    phone.value = ''
    address.value = ''
    bio.value = ''
    website.value = ''
  } catch (error) {
    errorMessage.value = error.message
    console.log(error)
  } finally {
    submitting.value = false
  }
}

const onReset = () => {
  email.value = ''
  first_name.value = ''
  last_name.value = ''
  middle_name.value = ''
  avatar.value = ''
  gender.value = ''
  phone.value = ''
  address.value = ''
  bio.value = ''
  website.value = ''
}

const onClear = () => {
  successMessage.value = ''
  errorMessage.value = ''
}

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Accounts', to: '/accounts' },
  { label: 'Settings', to: '/accounts/settings' }
]

const pageTitle = 'Settings'

onMounted(() => {
  if (!accountStore.isLoggedIn) {
    router.push('/accounts/login')
  }
  getUser()
})


</script>