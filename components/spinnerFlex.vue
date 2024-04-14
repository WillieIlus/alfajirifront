<template>
  <div class="flex items-center justify-center">
    <div class="flex items-center space-x-2">
    <Icon name="uil:spinner"
      class="size-16 text-emerald-600 inline-block animate-spin rounded-full" />
      <span class="text-emerald-600 text-lg font-semibold">Loading...</span>
  </div>
  </div>
</template>
<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

svg {
  animation: spin 3s linear infinite;
}
</style>