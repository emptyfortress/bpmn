<script setup lang="ts">
import { useNodesStore } from '@/stores/nodes'

const store = useNodesStore()
</script>

<template lang="pug">

.text-h6(v-if="!!store.selected") {{store.selected[0].label}}
</template>

<style scoped lang="scss"></style>
