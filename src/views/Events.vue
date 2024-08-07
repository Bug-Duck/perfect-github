<template>
  <div class="flex flex-col mt-3 border rounded-md w-full" v-for="event in events">
    <template v-if="event.type === 'IssueEvent'">
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <img :src="event.actor.avatar_url" class="w-10 h-10 rounded-full" />
          <div class="ml-2">
            <div class="text-sm font-bold">{{ event.actor.login }}</div>
            <div class="text-xs text-gray-500">{{ event.created_at }}</div>
          </div>
        </div>
        <div class="text-sm font-bold text-gray-500">{{ event.type }}</div>
      </div>
    </template>
    <template v-else-if="event.type === 'PullRequestEvent'">
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <img :src="event.actor.avatar_url" class="w-10 h-10 rounded-full" />
          <div class="ml-2">
            <div class="text-sm font-bold">{{ event.actor.login }}</div>
            <div class="text-xs text-gray-500">{{ event.created_at }}</div>
          </div>
        </div>
        <div class="text-sm font-bold text-gray-500">{{ event.type }}</div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-row justify-between">
        <div class="flex flex-row">
          <img :src="event.actor.avatar_url" class="w-10 h-10 rounded-full" />
          <div class="ml-2">
            <div class="text-sm font-bold">{{ event.actor.login }}</div>
            <div class="text-xs text-gray-500">{{ event.created_at }}</div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Octokit } from '@octokit/rest';
import { inject, onMounted, ref, Ref, watch } from 'vue';

const oc = inject('oc') as Ref<Octokit>

let events: Ref<Array<any>> = ref([])

watch(oc, async (newOc) => {
  events.value = (await newOc.rest.activity.listPublicEvents()).data
})

onMounted(async () => {
  events.value = (await oc.value.rest.activity.listPublicEvents()).data
})
</script>
