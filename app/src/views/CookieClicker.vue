<template>
    <div id="stockholm">How stockholm syndrome is made.</div>
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
import { CPC } from "@/stores/store.js"

function incCookie(){
    cookies.count = cookies.count + CPC.value
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

//upgrades.value[0].effect(clickInc)
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
    top:10%;
    width: 25%;
    height: auto;
    position: absolute;
}
#upgradebar{
    position: absolute;
    right: 0;
    border: solid;
    border-radius: 5px;
    height: 70%;
    background-color: rgba(250, 184, 158, 0.842);
    color: rgb(231, 38, 38);
}
#cookiecounter{
    width: fit-content;
    color: rgb(37, 211, 255);
    -webkit-text-stroke: 2px navy;
    font-family: "Comic Sans MS", "Comic Sans", cursive, sans-serif;
    font-size: 28px;
}
#stockholm{
    background-color: black;
    color: white;
    height: 10%;
    align-content: center;
    text-align: center;
    border: solid;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 0;
    border-right-width: 0;
    border-color: white;
}
:global(html) {
    background-color: #ffbed7;
background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e87171' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}

</style>