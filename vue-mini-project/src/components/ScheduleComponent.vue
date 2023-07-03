<template>
    <div class="tabs mx-auto">
        <div class="text-base font-bold uppercase rounded block leading-normal text-center text-gray-700 dark:text-gray-400 mb-5 mt-5">Matches</div>
        <ul class=" pt-3 flex ">
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                <a class="block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-3 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-secondary data-[te-nav-active]:text-secondary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-secondary"
                    v-on:click="toggleTabs(1)"
                    v-bind:class="{ 'text-slate-600 bg-white': openTab !== 1, 'text-slate-600': openTab === 1 }">
                    Round 1
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                <a class="block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-3 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-secondary data-[te-nav-active]:text-secondary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-secondary"
                    v-on:click="toggleTabs(2)"
                    v-bind:class="{ 'text-slate-600 bg-white': openTab !== 2, 'text-slate-600': openTab === 2 }">
                    Pre-Quarters
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                <a class="block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-3 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-secondary data-[te-nav-active]:text-secondary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-secondary"
                    v-on:click="toggleTabs(3)"
                    v-bind:class="{ 'text-slate-600 bg-white': openTab !== 3, 'text-slate-600': openTab === 3 }">
                    Quarter Finals
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                <a class="block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-3 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-secondary data-[te-nav-active]:text-secondary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-secondary"
                    v-on:click="toggleTabs(4)"
                    v-bind:class="{ 'text-slate-600 bg-white': openTab !== 4, 'text-slate-600': openTab === 4 }">
                    Semi Finals
                </a>
            </li>
            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
                <a class="block border-x-0 border-b-2 border-t-0 border-transparent pb-3.5 pt-3 text-base font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-secondary data-[te-nav-active]:text-secondary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:text-secondary"
                    v-on:click="toggleTabs(5)"
                    v-bind:class="{ 'text-slate-600 bg-white': openTab !== 5, 'text-slate-600': openTab === 5 }">
                    Finals
                </a>
            </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
            <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                    <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                        <p>
                        <div class="grid grid-rows-2 grid-flow-col gap-3">
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 1
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 2
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 3
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 4
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 5
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>

                        </div>
                        </p>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                        <p>
                        <div class="grid grid-rows-2 grid-flow-col gap-3">
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 6
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 7
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 class="text-lg">
                                        <a class="no-underline hover:underline text-black text-sm" href="#">
                                            Match 8
                                        </a>
                                        <p class="items-center text-xs text-gray-900 dark:text-white">
                                            June 15th 2023 | 8:00 AM
                                        </p>
                                    </h1>
                                </header>
                                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 1 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                                        <img alt="Placeholder" class="block rounded-full"
                                            src="https://picsum.photos/32/32/?random">
                                        <p class="ml-2 text-xs">
                                            Player 2 |
                                        </p>
                                        <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                            Score 2
                                        </p>
                                    </a>
                                </footer>

                            </article>

                        </div>
                        </p>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                        <p>
                        <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black text-sm" href="#">
                                        Match 1
                                    </a>
                                    <p class="items-center text-xs text-gray-900 dark:text-white">
                                        June 15th 2023 | 8:00 AM
                                    </p>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 1 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 2 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                            </footer>

                        </article>
                        <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black text-sm" href="#">
                                        Match 1
                                    </a>
                                    <p class="items-center text-xs text-gray-900 dark:text-white">
                                        June 15th 2023 | 8:00 AM
                                    </p>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 1 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 2 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                            </footer>

                        </article>
                        </p>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                        <p>
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black text-sm" href="#">
                                        Match 1
                                    </a>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 1
                                    </p>
                                </a>
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 2
                                    </p>
                                </a>

                            </footer>

                        </article>
                        <article class="overflow-hidden rounded-lg shadow-lg">

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black text-sm" href="#">
                                        Match 2
                                    </a>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 1
                                    </p>
                                </a>
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 2
                                    </p>
                                </a>
                            </footer>

                        </article>
                        </p>
                    </div>
                    <div v-bind:class="{ 'hidden': openTab !== 5, 'block': openTab === 5 }">
                        <p>
                        <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black text-sm" href="#">
                                        Match 1
                                    </a>
                                    <p class="items-center text-xs text-gray-900 dark:text-white">
                                        June 15th 2023 | 8:00 AM
                                    </p>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 1 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 2 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                            </footer>

                        </article>
                        <article class="overflow-hidden rounded-lg shadow-lg divide-y">

                            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 class="text-lg">
                                    <a class="no-underline hover:underline text-black text-sm" href="#">
                                        Match 1
                                    </a>
                                    <p class="items-center text-xs text-gray-900 dark:text-white">
                                        June 15th 2023 | 8:00 AM
                                    </p>
                                </h1>
                            </header>
                            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 1 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                                <a class="flex items-center no-underline hover:underline text-black" href="#">
                                    <img alt="Placeholder" class="block rounded-full"
                                        src="https://picsum.photos/32/32/?random">
                                    <p class="ml-2 text-xs">
                                        Player 2 |
                                    </p>
                                    <p class="items-center text-xs text-gray-900 dark:text-white ml-1">
                                        Score 2
                                    </p>
                                </a>
                            </footer>

                        </article>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <input type="date">

    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'Tabs',
    setup() {
        const openTab = ref(1);
        function toggleTabs(tabNumber: number) {
            openTab.value = tabNumber;
        }
        return {
            openTab,
            toggleTabs
        };
    },
});
</script>
  
