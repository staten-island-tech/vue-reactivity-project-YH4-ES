<template>
    <div @click="takeCookies(upgrade.name, upgrade.cost, upgrade.costInc, upgrade.upgradeLimit)">
        <h2>{{ upgrade.name }}</h2>
        <p>{{ upgrade.desc }}</p>
        <p class = "cost">Costs: {{ costList[upgrade.name] }} Cookies</p>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import { cookies } from "@/stores/store.js"
import { upgradenum } from "@/stores/store.js";
const props = defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
const costList = ref({})

onMounted(() => {
    costList.value[props.upgrade.name] = props.upgrade.cost
})
function takeCookies (el, cost, inc, limit){
    if (costList.value[el] == "MAX") {return}
    console.log(limit, el, limit, upgradenum.num.get(el))
    if (upgradenum.num.get(el) >= 0) {
        console.log("Another upgrade")
        upgradenum.num.set(el, upgradenum.num.get(el) + 1)

    }
    else {
        console.log("set to 0", upgradenum.num.get(el))
        upgradenum.num.set(el, 0)}
    let actualInc
    if (upgradenum.num.get(el) == 0){
        actualInc = 0
    } else {
        actualInc = inc**(upgradenum.num.get(el))
    }
    console.log(cost * actualInc, actualInc, inc, upgradenum.num.get(el))

    costList.value[el] = cost * (inc**(upgradenum.num.get(el) + 1))
    cost = cost * actualInc
    cookies.count -= cost
    console.log(costList)
    if (upgradenum.num.get(el) >= limit) {
        console.log("MAX")
        costList.value[el] = "MAX"
    }
}
</script>

<style lang="scss" scoped>

</style>