<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
    <div class="flex items-center justify-center bg-white rounded-lg px-4 py-3 mb-4">
      <h2 class="text-base font-bold uppercase rounded block leading-normal text-center text-gray-700 dark:text-gray-400">Points Table</h2>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 divide-y divide-gray-200">
      <thead class="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th class="px-5 py-2 text-gray-600 font-medium tracking-wider">Player Name</th>
          <th class="px-5 py-2 text-gray-600 font-medium tracking-wider">Group</th>
          <th class="px-5 py-2 text-gray-600 font-medium tracking-wider">Win</th>
          <th class="px-5 py-2 text-gray-600 font-medium tracking-wider">Score</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="match in matches" :key="match.playerId"
          class="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600">
          <td class="px-8 py-3 whitespace-nowrap text-gray-600 dark:text-gray-200">{{ match.name }}</td>
          <td class="px-8 py-3 whitespace-nowrap text-gray-600 dark:text-gray-200">{{ match.groupName }}</td>
          <td class="px-8 py-3 whitespace-nowrap text-gray-600 dark:text-gray-200">{{ match.totalMatchesWon }}</td>
          <td class="px-8 py-3 whitespace-nowrap text-gray-600 dark:text-gray-200">{{ match.score }}</td>
        </tr>
      </tbody>
    </table>
    <pagination :page-count="pageCount" :current-page.sync="currentPage" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axiosInstance from '@/stores/auth.store'

interface Match {
  playerId: number;
  name: string;
  groupId: number;
  groupName: string;
  totalMatchesWon: string;
  score: string;
}
const matches = ref<Match[]>([]);
const getMatchPoints = async () => {
  try {
    let pointsResponse = await axiosInstance.get('/Player/GetPlayersOrderbyScore')
    matches.value = pointsResponse.data.result
    console.log(matches.value)
  }
  catch (error) {
    console.error(error);
  }
};
const pageSize = 3;
const currentPage = ref(1);

const pageCount = Math.ceil(matches.value.length / pageSize);

const updatePaginatedMatches = () => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  matches.value = matches.value.slice(startIndex, endIndex);
};

updatePaginatedMatches();

onMounted(() => {
  getMatchPoints();
});


</script>

<style>
@media (min-width: 640px) {
  table {
    display: table;
  }

  thead {
    display: table-header-group;
    border-bottom-width: 1px;
  }

  tbody {
    display: table-row-group;
  }

  tr {
    display: table-row;
  }

  th {
    display: table-cell;
    padding: 0.75rem;
    font-size: 0.875rem;
    text-align: left;
    font-weight: 600;
    line-height: 1.25rem;
  }

  td {
    display: table-cell;
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    vertical-align: top;
  }

  tbody tr:last-child {
    border-bottom-width: 0;
  }
}
</style>