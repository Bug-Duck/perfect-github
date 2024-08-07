<template>
  <div class="m-2">
    <div class="flex flex-row">
      <div class="float-left w-[30%]">
        <img class="w-16 h-16 rounded-full m-3" :src="profile.avatar_url">
      </div>
      <div class="float-left w-full">
        <h2 class="text-xl font-mono">{{ profile.name }}</h2>
        <h3>{{ profile.bio }}</h3>
      </div>
    </div>
    <div class="w-full"></div>
    <div class="flex flex-row text-center pt-6">
      <div class="w-full flex flex-col justify-center items-center">
        <StarIcon class="w-10 h-10" />
        <div>
          Starred
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <CubeIcon class="w-10 h-10" />
        <div>
          Packages
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <TableIcon class="w-10 h-10" />
        <div>
          Projects
        </div>
      </div>
      <div class="w-full flex flex-col justify-center items-center">
        <BoxIcon class="w-10 h-10" />
        <div>
          Repos
        </div>
      </div>
    </div>
    <div class="border rounded-xl mx-2 mt-10">
      <div v-html="readme" class="p-3 mb-12"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Octokit } from '@octokit/rest';
import { inject, onMounted, ref, Ref, watch } from 'vue';
import { StarIcon, BoxIcon, TableIcon, CubeIcon } from '@radix-icons/vue';
import { parse } from 'marked'
// import { watch } from 'fs';

const oc = inject('oc') as Ref<Octokit>

let profile = ref()
let readme = ref<string>()

// const message = ref('')

async function init() {
  if (typeof oc.value === 'undefined')
    return
  profile.value = (await oc.value.rest.users.getAuthenticated()).data
  readme.value = parse(atob((await oc.value.repos.getReadme({
    owner: profile.value.login,
    repo: profile.value.login,
  })).data.content)) as string
}

watch(oc, init)

onMounted(async () => {
  await init()
})
</script>
