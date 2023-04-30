<script>
import Hamburger from "./Hamburger.svelte";
</script>
<div class="flex-1">
<div class="foo h-full v-full mt-0 border-b-blue-950  bg-slate-400 rounded-t-sm">
    <div class="grid grid-cols-3 pt-1 pb-2">
        <div class="text-left pt-3 pl-2"><Hamburger /></div>
        <div class="text-center text-2xl font-bold mt-2">Time Registration</div>
        <div class="text-right mr-10 text-2xl font-bold mt-2">About</div>
    </div>

    <slot></slot>
</div>
</div>
<style>
    .foo {
        height: 100%;
        background-color: #9ca3af;
    }
</style>