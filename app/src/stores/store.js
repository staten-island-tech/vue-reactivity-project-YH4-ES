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
    }
  },
  ["Auto-Cookier"] : {
    function (freqobj) {
      while(true) {
        
      }
    }
  }
}