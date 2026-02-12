<template>
    <div @click="takeCookies(upgrade.name, upgrade.cost, upgrade.costInc, upgrade.upgradeLimit)">
        <h2>{{ upgrade.name }}</h2>
        <p>{{ upgrade.desc }}</p>
        <p class = "cost">Costs: {{ upgradenum.get(upgrade.name) || upgrade.cost }} Cookies</p>
    </div>
</template>

<script setup>
import {ref} from "vue"
import { cookies } from "@/stores/store.js"
import { upgradenum } from "@/stores/store.js";
defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
function takeCookies (el, cost, inc, limit){
    console.log(limit)
    if (upgradenum.num.get(el) >= 0) {
        console.log("Another upgrade")
        upgradenum.set(el, upgradenum.get(el) + 1)

    }
    else {
        console.log("set to 0", upgradenum.get(el))
        upgradenum.set(el, 0)}
    let actualInc
    if (upgradenum.get(el) == 0){
        actualInc = 0
    } else {
        actualInc = inc**(upgradenum.get(el))
    }
    console.log(cost * actualInc, actualInc, inc, upgradenum.get(el))
    cost = cost * actualInc
    cookies.count -= cost
    if (upgradenum.get(el) >= limit) {
        console.log("MAX")
        
    }
}
</script>

<style lang="scss" scoped>

</style>