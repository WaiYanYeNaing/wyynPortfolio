<template>
  <div
    class="flex flex-col h-screen pt-10 sm:pt-14 md:py-28"
    style="background-position: -1px 1px"
  >
    <!-- Nav -->
    <!-- <div class="flex justify-between px-20">
      <div
        class="w-20 h-20 flex justify-center items-center transition-transform duration-500 ease-in-out hover:transform hover:rotate-90"
      >
        <img src="@/assets/w.png" alt="w" class="w-9" />
      </div>
      <div class="w-20 h-20 flex justify-center items-center">Nav</div>
    </div> -->
    <Nav />

    <div class="flex flex-col justify-center items-center h-screen mx-10 text-center">
      <div class="text-purple font-extrabold">
        <span class="text-light-animation hey text-[2rem] md:text-[2.7rem] sm:mr-5"
          >HEY, I'M
        </span>
        <span class="text-light-animation name font-bold text-[2.2rem] md:text-[3rem]"
          >WAI YAN YE NAING</span
        >
      </div>
      <span class="text-light-animation text-purple text-sm sm:text-[1.4rem] md:text-3xl font-extrabold call-me"
        >BUT_YOU_CAN_CALL_ME_WAI</span
      > 

      <span class="text-white text-xs sm:text-sm lg:text-base mt-3">
        In the world of browsers and buttons,
      </span>
      <span class="text-white text-xs sm:text-sm lg:text-base"> I am the creator.</span>

      <div class="flex flex-col sm:flex-row sm:space-x-10 mt-5 text-lg">
        <div class="flex items-center mt-3">
          <img src="@/assets/right_arrow.png" alt="arrow" class="w-4 sm:w-6 mr-1" />
          <span
            class="text-white text-sm md:text-base hover-underline-animation"
            @click="goToProjects()"
            >see my projects</span
          >
        </div>
        <div class="flex items-center mt-3">
          <img src="@/assets/right_arrow.png" alt="arrow" class="w-4 sm:w-6 mr-1" />
          <span class="text-white text-sm md:text-base hover-underline-animation"
            @click="goToAbout()"
            >more about me</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Nav from "../components/utility/Nav.vue";

const router = useRouter();

const goToProjects = () => {
  router.push("/Project");
};
const goToAbout = () => {
  router.push("/About");
};
</script>

<style>
.text-light-animation {
  transition: 0.1s;
}
.text-light-animation.hey:hover + .name,
.text-light-animation.name:hover {
  margin-left: 10px;
  text-shadow:
    0 0 10px #9aa1bc,
    0 0 20px #9aa1bc,
    0 0 40px #9aa1bc,
    0 0 80px #9aa1bc,
    0 0 160px #9aa1bc;
}

.call-me {
  margin: 0;
  padding: 0;
  position: relative;
}
.call-me:before {
  content: "BUT_YOU_CAN_CALL_ME_WAI";
  position: absolute;
  color: #fff;
  top: 0;
  left: 0;
  width: 0%;
  overflow: hidden;
  transition: all 0.5s;
}
.call-me:hover:before {
  width: 100%;
}

.hey {
  font-family: "Monoton";
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #eceaf2;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
