<template>
  <!-- <div class="m-0 w-full h-14 border">
    <div class="float-left mx-6 text-2xl mt-3">Home</div>
  </div> -->
  <div class="m-0 w-full h-12 border">
    <div class="float-left mx-3 mt-1" v-for="index in avatars.length">
      <img :src="avatars[index - 1]" class="w-10 h-10 rounded-full" @click="currentUser = index - 1" :style="{
        border: currentUser == index - 1 ? '2px solid green' : 'none',
      }">
    </div>
  </div>
  <main>
    <Events />
     {{ message }}
  </main>
</template>

<script setup lang="ts">
import { Octokit } from '@octokit/rest'
import { inject, onMounted, ref, Ref, watch } from 'vue'
import Events from './Events.vue'

const oc = inject('oc') as Ref<Octokit>

let currentUser: Ref<number> = ref(0)
// const events: Ref<Array<any>> = ref([])

const message = ref('')

let avatars: Ref<Array<string>> = ref([])

async function init(oc: Octokit) {
  if (typeof oc === 'undefined')
    return

  let userdata = await oc.rest.users.getByUsername({
    username: 'sheepbox8646'
  })
  avatars.value.push(userdata.data.avatar_url)

  const orgs = (await oc.rest.orgs.listForUser({
    username: 'sheepbox8646'
  })).data
  for (const org of orgs) {
    avatars.value.push(org.avatar_url)
  }
}

watch(oc, init)

onMounted(async () => {
  await init(oc.value)
})
</script>
