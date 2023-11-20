<template>
  <main>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script lang="ts">
</script>

<style scoped>
  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    color: #DFDFDF;
    overflow: hidden;
  }
  
  .fade-enter {
    opacity: 0;
    transform: scale(1.75, 1.75)
  }

  .fade-enter-active {
    transition-property: all;
    transition-duration: 0.25s;
  }

  /* .fade-leave {
  } */
  
  .fade-leave-active {
    transition-property: all;
    transition-duration: 0s;
  }
</style>