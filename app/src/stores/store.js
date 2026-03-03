import { reactive } from 'vue'

export const cookies = reactive({
  count: 0
})

export const upgradenum = reactive({
  num : new Map()
})

export const upgradeFunctions = {
  ["Cookies-Per-Click"] : {
    function (CPC, clickScale) {
      CPC + clickScale
      console.log("John")
    }
  },
  ["Auto-Cookier"] : {
    function (freqobj) {
      let interval = setInterval(function() {
        cookies.value += 5
        console.log("John")
      }, 5000);
    }
  }
}