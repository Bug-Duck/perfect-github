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
import { inject } from 'vue';
import { StarIcon, BoxIcon, TableIcon, CubeIcon } from '@radix-icons/vue';
import { parse } from 'marked'

const oc = inject('oc') as Octokit

const profile = (await oc.rest.users.getAuthenticated()).data
const readme = parse(atob((await oc.repos.getReadme({
  owner: profile.login,
  repo: profile.login,
})).data.content))
</script>
