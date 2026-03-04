<template>
    <div @click="takeCookies(upgrade.name, upgrade.cost, upgrade.costInc, upgrade.upgradeLimit)">
        <h2>{{ upgrade.name }}</h2>
        <p>{{ upgrade.desc }}</p>
        <p class = "cost">Costs: {{ costList[upgrade.name] }} Cookie(s)</p>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import { cookies } from "@/stores/store.js"
import { upgradenum } from "@/stores/store.js";
import { upgradeFunctions } from "@/stores/store.js";
const props = defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
const costList = ref({})

onMounted(() => {
    let name = props.upgrade.name
    costList.value[name] = props.upgrade.cost
    if (upgradeFunctions[name]) {
        console.log(upgradeFunctions[name].function, name)
        upgradeFunctions[name].function()
    }
    
})

function takeCookies (el, cost, inc, limit){
    if (costList.value[el] == "MAX" || cookies <= cost) {return} 

    upgradeFunctions[el].function()

    if (upgradenum.num.get(el) >= 1) {
        console.log("Another upgrade")
        upgradenum.num.set(el, upgradenum.num.get(el) + 1)

    } else {
        upgradenum.num.set(el, 1)
    }
    console.log(limit, el, limit, upgradenum.num.get(el))

    let actualInc

    if (upgradenum.num.get(el) == 0){
        actualInc = 1
    } else {
        actualInc = inc**(upgradenum.num.get(el) - 1)
    }
    console.log(cost * actualInc, actualInc, inc, upgradenum.num.get(el))

    costList.value[el] = cost * (inc**(upgradenum.num.get(el)))
    cost = cost * actualInc
    cookies.count -= cost
    console.log(costList)

    if (upgradenum.num.get(el) >= limit) {
        costList.value[el] = "MAX"
    }
}
</script>

<style lang="scss" scoped>

</style>