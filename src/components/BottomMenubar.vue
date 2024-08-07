<template>
  <div class="fixed border left-0 bottom-0 w-full h-12">
    <div class="flex flex-row w-full">
      <div class="flex flex-grow-1 w-full">
        <router-link to="/" class="w-full" @click="first = false">
          <HomeIcon class="w-full text-center pt-2 h-10" :class="{'text-sky-300': route.path === '/'}"/> 
        </router-link>
      </div>
      <div class="flex flex-grow-1 w-full" @click="first = false">
        <router-link to="/profile" class="w-full">
          <PersonIcon class="w-full text-center pt-2 h-10" :class="{'text-sky-300': route.path === '/profile'}"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, PersonIcon } from '@radix-icons/vue'
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const first = inject('first')
</script>