<template>
    <div id="cookiediv">
        <h2 id="cookiecounter">Cookies: {{ cookies.count }}</h2>
        <img @click="incCookie()"  @contextmenu.prevent="incCookie" id="cookieimg"src="/cookie.png"/>
    </div>
    <div class="sidebar" id = "upgradebar"><Upgradetemplate v-for="upgrade in upgrades" :key="upgrade.name" :upgrade="upgrade"></Upgradetemplate></div> <!--cycle through a list of stuff using a component-->
</template>

<script setup>
import Upgradetemplate from "@/components/upgradetemplate.vue"
import {ref} from"vue"
import { cookies } from "@/stores/store.js"
let clickInc = ref(1)
function incCookie(){
    cookies.count = cookies.count + clickInc.value
}
function changeInc(num){
    clickInc.value = num
}

const upgrades = ref([
    {
        name : "Cookies-Per-Click",
        cost : 1,
        costInc: 2,
        expo: 2.5,
        upgradeLimit: 100,
        desc: "Increases amount of Cookies you get per click.",
        numStack: 0,
        clickScale: 1,
        effect: function(CPC) {
            CPC + self.clickScale
        }
    },
    {
        name : "Auto-Cookier",
        cost : 5,
        costInc: 10,
        exp: 1.5,
        upgradeLimit : 10,
        desc: "Automatically generates cookies.",
        numStack: 0,
    }
])

upgrades.value[0].effect(clickInc)
</script>

<style scoped>
#cookiediv {
    width: 20%;
  height: auto;
  margin-top: 20px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
#cookieimg {
    width: 100%;
    margin: auto;
}
.sidebar{
    width: 25%;
    height: auto;
    position: absolute;
}
#upgradebar{
    position: absolute;
    right: 0;
    top: 0;
}
#cookiecounter{
    width: fit-content;
}


</style>