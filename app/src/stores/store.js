import { reactive, ref  } from 'vue'

export const cookies = reactive({
  count: 0
})

export const CPC = ref(1)

export const upgradenum = reactive({
  num : new Map()
})

export const nextCPCupgrade = ref(2)

var autoLoad = false
export const upgradeFunctions = {


  ["Cookies-Per-Click"] : {
    function () {
      CPC = nextCPCupgrade.value
      nextCPCupgrade.value == nextCPCupgrade.value* nextCPCupgrade.value
      console.log(CPC)
    }
  },


  ["Auto-Cookier"] : {
    function () {
      if (autoLoad) {
        autoLoad = autoLoad**2
      }else {
        autoLoad = 5
        let interval = setInterval(function() {
        cookies.count += autoLoad
        }, 5000)
      }
    }
  }
}