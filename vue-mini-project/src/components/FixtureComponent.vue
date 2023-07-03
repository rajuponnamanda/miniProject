<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
    <div class="bg-white rounded-lg px-4 py-3 mb-4">
      <h2
        class="text-base font-bold uppercase rounded block leading-normal text-center text-gray-700 dark:text-gray-400 mb-4">
        My Fixtures Table
      </h2>

      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="px-4 py-3 text-left">Group Name</th>
            <th class="px-4 py-3 text-center">Score</th>
            <th class="px-4 py-3 text-right">Player Name</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr v-for="player in players" :key="player.playerId" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="px-4 py-4 whitespace-nowrap font-normal text-left">{{ player.groupName }}</td>
            <td class="px-4 py-4 whitespace-nowrap font-normal text-center">{{ player.score }}</td>
            <td class="px-4 py-4 whitespace-nowrap font-normal text-right">{{ player.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axiosInstance from '@/stores/auth.store'

interface Player {
  playerId: number
  groupName: string
  score: number
  name: string
}

const players = ref<Player[]>([])

async function fetchPlayers() {
  try {
    const response = await axiosInstance.get('/Player/GetPlayersOrderByScore')
    const result = response.data.result
    players.value = result
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchPlayers()
})
</script>

<style>
/* No styles needed */
</style>
