<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="group in groups" :key="group.groupId" @click="showModal(group)"
      class="block max-w-sm p-16 text-black bg-white border-lg border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer">
      <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 uppercase text-center dark:text-white">{{
        group.groupName
      }}</h5>
    </div>
  </div>
  <div class="fixed inset-0 z-50 overflow-y-auto" v-if="selectedGroup">
    <div class="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex items-center justify-center">
      <div aria-hidden="true" @click="closeModal"></div>
      <div class="bg-white rounded-lg overflow-hidden shadow-xl">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium uppercase text-gray-900">{{ selectedGroup.groupName }} Players</h3>
          <div class="mt-4">
            <div v-for="player in players" :key="player.playerId">
              <h4 class="text-base font-bold tracking-tight text-gray-900 capitalize dark:text-white">{{ player.name }}
              </h4>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-600 text-base font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import axiosInstance from '@/stores/auth.store'

interface Group {
  groupId: number;
  groupName: string;
}

interface Player {
  playerId: number;
  playerName: string;
  name: string;
  groupId: number;
  totalMatchesPlayed: number;
  totalMatchesWon: number;
}

let groups = ref<Group[]>([]);
const players = ref<Player[]>([]);
const selectedGroup = ref<Group | null>(null);
const fetchGroups = async () => {
  try {

    let groupResponse = await axiosInstance.get("/Group");
    groups.value = groupResponse.data.result;
    console.log(groups.value);
  } catch (error) {
    console.error(error);
  }
};


const fetchPlayers = async () => {
  try {
    if (selectedGroup.value && selectedGroup.value.groupId) {
      const response = await axiosInstance.get(
        `/Player/GetPlayerByGroupId?groupId=${selectedGroup.value.groupId}`);
      players.value = response.data.result;
      console.log(players.value);
    } else {
      console.log("No group selected or groupId is invalid.");
      players.value = [];
    }
  } catch (error) {
    console.error(error);
  }
};

const showModal = (group: Group) => {
  selectedGroup.value = group;
  fetchPlayers();
};

const closeModal = () => {
  selectedGroup.value = null;
  players.value = [];
};

onMounted(async () => {
  await fetchGroups();
});

watch(selectedGroup, fetchPlayers);
</script>