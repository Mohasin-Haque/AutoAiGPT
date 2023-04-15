<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.q-page-container {
  background: rgb(251, 150, 103);
  background: linear-gradient(135deg, rgba(219, 251, 103, 0.7) 0%, rgba(0, 104, 145, 0.7) 50%, rgba(235, 97, 97, 0.7) 100%);
  border: 5px solid rgb(0, 225, 255);
  margin:0 7rem 0 7rem;
}
</style>
