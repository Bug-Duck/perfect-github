<template>
  <div class="m-0 w-full h-14 border">
    <div class="float-left mx-6 text-2xl mt-3">Home</div>
  </div>
  <div class="m-0 w-full h-12 border">
    <div class="float-left mx-3 mt-1" v-for="avatar in avatars">
      <img :src="avatar" class="w-10 h-10 rounded-full">
    </div>
    <!-- <div class="float-left mx-1 mt-3" v-for=""></div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { getEvents } from '../apis/get-events'
import { getOrgsUnderSomeone } from '../apis/get-orgs-under-someone'
import { getUserData } from '../apis/get-user-data'

const currentUser: Ref<string> = ref('sheepbox8646')
const events: Ref<Array<any>> = ref([])

getEvents(currentUser.value).then((data) => {
  events.value.push(...data)
})

const avatars: Ref<Array<string>> = ref([])

getUserData('sheepbox8646').then((data) => {
  avatars.value.push(data.avatar_url)
})
getOrgsUnderSomeone('sheepbox8646').then((data) => {
  avatars.value.push(...data.map((org: any) => {
    return org.avatar_url
  }))
})
</script>
