<script setup lang="ts">
import Button from './Button.vue';
</script>

<template>
    <main class="container mx-auto">
        <div class="px-6 py-8 grid place-items-center">
            <div class="mx-auto max-w-2xl lg:mx-0 text-center">
                <h1 class="text-4xl font-bold tracking-tight sm:mt-10 sm:text-6xl">
                    <div class="flex justify-center pb-6 sm:pb-4">
                        <div class="relative flex">
                            <div class="w-28 h-28 absolute top-0 left-0 blur-3xl"
                                style="background-image: linear-gradient( -45deg, #1099A2 50%, #E8C06B 50% )" />
                            <div class="relative text-[74px] sm:text-[90px]">
                                🍞
                            </div>
                        </div>
                    </div>
                    <span class="text-emerald-500">
                        VueColdToast
                    </span>
                    <br>
                    <span class="text-stone-300">
                        The Best Toast in Town.
                    </span>
                </h1>
                <div class="mt-8 flex justify-center items-center gap-x-6">
                    <Button as="a" href="/guide/getting-started">
                        Get started
                    </Button>
                    <Button as="a" href="https://github.com/pezexd/vue-cold-toast" variant="secondary">
                        View on GitHub
                    </Button>
                </div>
            </div>
        </div>
    </main>
</template>