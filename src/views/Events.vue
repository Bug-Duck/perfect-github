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
import { inject } from 'vue';

const oc = inject('oc') as Octokit

const events = (await oc.rest.activity.listPublicEvents()).data
</script>
