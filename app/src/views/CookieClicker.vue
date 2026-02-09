<template>
    <div id="cookiediv">
        <h2>Cookies: {{ cookies }}</h2>
        <img @click="incCookie()" id="cookieimg"src="/cookie.png"/>
    </div>
    <div class="sidebar"></div> <!--cycle through a list of stuff using a component-->
</template>

<script setup>
import {ref} from"vue"
const cookies = ref(0)
let clickInc = ref(1)
function incCookie(){
    cookies.value = cookies.value + clickInc.value
}
function changeInc(num){
    clickInc.value = num
}

const upgrades = ref([
    {
        name : "Cookies-Per-Click",
        cost : 0,
        costInc: 2,
        expo: 2,
        upgradeLimit: 100
    },
    {
        name : "Auto-Cookier",
        cost : 5,
        costInc: 10,
        exp: 1.5,
        upgradeLimit : 10
    }
])
</script>

<style scoped>
#cookiediv {
width: 250px;
  height: auto;
  display: block;
  margin-top: 20px;
}
#cookieimg {
    width: 200px;
}

</style>