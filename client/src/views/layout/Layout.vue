<script lang="ts">
export default {
    name: 'Layout'
}
</script>

<template>
 <div class="layout">
    <router-view name="headslot">

    </router-view>
    <div>Middle</div>
    <main>
        <router-view></router-view>
    </main>
    <router-view name="footer">

    </router-view>
 </div>
</template>

<style>

</style>