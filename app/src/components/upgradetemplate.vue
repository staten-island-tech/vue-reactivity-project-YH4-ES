<template>
    <div @click="takeCookies(upgrade.name, upgrade.cost, upgrade.costInc)">
        <h2>{{ upgrade.name }}</h2>
        <p>{{ upgrade.desc }}</p>
        <p>Costs: {{ upgrade.cost }} Cookies</p>
    </div>
</template>

<script setup>
defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
let upgradenum = {}
function takeCookies (el, cost, inc){
    upgradenum.el = upgradenum.el + cost || 0
}
</script>

<style lang="scss" scoped>

</style>