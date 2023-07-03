<template>
    <NavBar />
    <section class=" dark:bg-gray-900 mt-20 antialiased">
        <div class="mx-auto max-w-screen px-4 ">
            <div class="flex flex-wrap">
                <div class="w-full">
                    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                                v-on:click="toggleTabs(1)"
                                v-bind:class="{ 'text-slate-600 bg-white': openTab !== 1, 'text-white bg-slate-600': openTab === 1 }">
                                Register
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(2)"
                                v-bind:class="{ 'text-slate-600 bg-white': openTab !== 2, 'text-white bg-slate-600': openTab === 2 }">
                                Groups
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(3)"
                                v-bind:class="{ 'text-slate-600 bg-white': openTab !== 3, 'text-white bg-slate-600': openTab === 3 }">
                                Schedule
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(4)"
                                v-bind:class="{ 'text-slate-600 bg-white': openTab !== 4, 'text-white bg-slate-600': openTab === 4 }">
                                My Fixtures
                            </a>
                        </li>
                        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-base font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                                v-on:click="toggleTabs(5)"
                                v-bind:class="{ 'text-slate-600 bg-white': openTab !== 5, 'text-white bg-slate-600': openTab === 5 }">
                                Leader Board
                            </a>
                        </li>
                    </ul>
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div class="px-4 py-5 flex-auto">
                            <div class="tab-content tab-space">
                                <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                                    <p>
                                        <FormComponent/>
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                                    <p>
                                        <CardComponent/>
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                                    <p>
                                        <ScheduleComponent/>
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                                    <p>
                                        <FixtureComponent/>
                                    </p>
                                </div>
                                <div v-bind:class="{ 'hidden': openTab !== 5, 'block': openTab === 5 }">
                                    <p>
                                        <PointsTable/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'

import FormComponent from '@/components/FormComponent.vue';
import ScheduleComponent from '@/components/ScheduleComponent.vue';
import PointsTable from "../components/PointsTable.vue";
import FixtureComponent from "../components/FixtureComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import { useUserStore } from '@/stores/counter';

export default defineComponent({
    name: "SlateTabs",
    setup() {
        const userStore = useUserStore()
        const openTab = ref(1);
        function toggleTabs(tabNumber: number) {
            openTab.value = tabNumber;
        }
        return {
            openTab,
            toggleTabs
        };
    },
    components: {FormComponent, ScheduleComponent, PointsTable, FixtureComponent, CardComponent }
})
</script>