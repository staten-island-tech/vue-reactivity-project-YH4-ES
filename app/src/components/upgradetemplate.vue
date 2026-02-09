<template>
    <div>
        <h2>{{ upgrade.name }}</h2>
        <p>{{ upgrade.desc }}</p>
        <p>{{ upgrade.cost }}</p>
    </div>
</template>

<script setup>
defineProps({
    upgrade: {
        type: Object,
        required: true,
    }
})
    
</script>

<style lang="scss" scoped>

</style>