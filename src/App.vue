<template>
  <div>
    <Suspense class="w-full">
      <router-view></router-view>
    </Suspense>
    <Home />
    <BottomMenubar 
      class="fixed bottom-0 left-0 z-50 bg-slate-100"
      v-if="route.path === '/' || route.path === '/profile'"
    />
  </div>
  <!-- <div>{{ message }}</div> -->
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import BottomMenubar from './components/BottomMenubar.vue'
import { Octokit } from '@octokit/rest'
import Home from './views/Home.vue'
import { useRouter, useRoute } from 'vue-router'

let octokit

const router = useRouter()
const route = useRoute()

const message = ref('')

onMounted(() => {
  document.addEventListener('deviceready', () => {
    const storage = new (cordova.plugins as any).SecureStorage(
      () => console.log('init'),
      (e: Error) => console.log(e),
      'perfect-github'
    )
    storage.get(
      (value: string) => {
        octokit = new Octokit({
          auth: value
        })
        provide('oc', octokit)
        message.value = value
      },
      (_err: Error) => {
        provide('storage', storage)
        router.push('/auth')
      },
      'token'
    )
  }, false)
})
</script>