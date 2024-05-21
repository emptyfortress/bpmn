<script setup lang="ts">
import { useNodesStore } from '@/stores/nodes'

const store = useNodesStore()
</script>

<template lang="pug">
h2(v-if="!!store.selected") hello
// pre {{ store.selected }}
</template>

<style scoped lang="scss"></style>
