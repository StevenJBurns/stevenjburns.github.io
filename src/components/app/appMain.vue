<template>
  <main>
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
  </main>
</template>

<script>
  import Vue from "vue";
  import VueRouter from "vue-router";

  Vue.use(VueRouter);

  export default {
    name: "AppMain",
  };
</script>

<style scoped>
  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    color: #dfdfdf;
    overflow: hidden;
  }

  .fade-enter {
    opacity: 0;
    transform: scale(1.75, 1.75);
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
