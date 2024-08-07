<template>
  <div class="flex justify-center items-center h-screen text-center">
    <div class="flex flex-col">
      <h1 class="text-2xl">Authorize Perfect GitHub to Login you account by your token</h1>
      <input class="h-6 w-52 rounded-full" v-model="token">
      <button class="bg-sky-300 h-6 w-24" @click="submit()">Authorize</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const token = ref<string>('')

function submit() {
  const storage = new (window.cordova.plugins as any).SecureStorage(
    () => {},
    () => {},
    'perfect-github'
  )
  storage.set(
    (_key: any) => {},
    (_e: any) => {},
    'token',
    token.value
  )
  router.replace('/')
}
</script>
