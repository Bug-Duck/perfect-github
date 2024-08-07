<template>
  <div>
    <Suspense class="w-full">
      <router-view></router-view>
    </Suspense>
    <BottomMenubar 
      class="fixed bottom-0 left-0 z-50 bg-slate-100"
      v-if="route.path === '/' || route.path === '/profile'"
    />
  </div>
  <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import BottomMenubar from './components/BottomMenubar.vue'
import { Octokit } from '@octokit/rest'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const message = ref('')

const octokit = ref<Octokit>()
provide('oc', octokit)

onMounted(() => {
  document.addEventListener('deviceready', () => {
    const storage = new (cordova.plugins as any).SecureStorage(
      () => console.log('init'),
      (e: Error) => console.log(e),
      'perfect-github'
    )
    storage.get(
      (value: string) => {
        octokit.value = new Octokit({
          auth: value
        })
        // message.value = value
        router.push('/')
      },
      (_err: Error) => {
        router.push('/auth')
      },
      'token'
    )
  }, false)
})
</script>