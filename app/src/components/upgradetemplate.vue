<template>
    <div @click="takeCookies(upgrade.name, upgrade.cost, upgrade.costInc)">
        <h2>{{ upgrade.name }}</h2>
        <p>{{ upgrade.desc }}</p>
        <p>Costs: {{ upgrade.cost }} Cookies</p>
    </div>
</template>

<script setup>
import {ref} from "vue"
import { cookies } from "@/stores/store.js"
defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
let upgradenum = ref({})
function takeCookies (el, cost, inc){
    upgradenum[el] = upgradenum[el] + 1 || 0
    let actualInc
    if (upgradenum[el] >= 0){
        actualInc = 0
    } else {actualInc = inc^upgradenum[el]}
    console.log(cost * (inc^upgradenum[el]))
    cookies.count -= cost
}
</script>

<style lang="scss" scoped>

</style>