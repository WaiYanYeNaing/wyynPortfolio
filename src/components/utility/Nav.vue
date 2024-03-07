<template> 
    <!-- Nav -->
    <div class="flex justify-between px-8 sm:px-20 sticky top-0 z-50">
      <div
        class="w-20 h-20 flex justify-center items-center transition-transform duration-500 ease-in-out hover:transform hover:rotate-90 cursor-pointer" @click="goToHome()"
      >
        <img src="@/assets/w.png" alt="w" class="w-9" />
      </div>
      <div class="w-20 h-20 flex justify-center items-center">Nav</div>
    </div>
</template> 

<script setup>
import { useRouter } from "vue-router"; 

const router = useRouter();

const goToHome = () => {
  router.push("/");
}

</script>

<style lang="scss" scoped>

</style>