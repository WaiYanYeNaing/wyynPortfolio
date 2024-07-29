<template>
  <div class="flex flex-col h-screen py-10 lg:py-28">
    <Nav />
    <div class="flex text-[#f3f2f9ba] justify-between mt-10 lg:mt-20">
      <div class="hidden md:flex w-1/2 relative">
        <transition name="fade" mode="out-in">
          <img :key="hoveredProjectImage" :src="computedImageUrl" class="rounded-tr-[3rem] absolute bottom-[-12px] left-0 h-[400px] object-cover" alt="project">
        </transition>
      </div>

      <div class="w-full md:w-1/2 pl-10 lg:pl-20 mr-16 lg:mr-20 xl:mr-48">
        <div class="flex justify-between items-center pb-5">
          <div class="font-extrabold text-2xl sm:text-[3rem]">Projects</div>
          <div class="font-semibold text-xl">9</div>
        </div>
        <div ref="scrollableDiv" class="h-[21rem] overflow-y-auto" @click="goToProjectDetail()">
          <div v-for="(project, i) in projects" :key="i" class="project" @mouseover="hoveredProjectImage = project.image">
            <hr />
            <div class="flex justify-between items-center py-5">
              <div class="flex flex-row w-2/3 items-center md:space-x-3">
                <img
                  src="@/assets/right_arrow_pj.png"
                  class="arrow-image"
                  alt="right arrow"
                />
                <div class="text-sm md:text-base">{{ project.projectName }}</div>
              </div>
              <div class="text-sm w-1/3 text-right font-[PoiretOne] font-bold tracking-wide text-ellipsis overflow-hidden whitespace-nowrap">{{ project.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Nav from "../components/utility/Nav.vue";
import { useRouter } from "vue-router";
import useSmoothScroll from "../components/utility/SmoothScroll.js";

const { scrollableDiv } = useSmoothScroll();

const router = useRouter();

const projects = ref([
  { projectName: "dhipaya", type: "Insurance", image: "Screenshot_1.png" },
  { projectName: "optimistic", type: "HR Management", image: "Screenshot_2.png" },
  { projectName: "Jarviz", type: "Company Management", image: "Screenshot_3.png" },
  { projectName: "Veracity", type: "Digital Signature", image: "Screenshot_4.png" },
  { projectName: "ecoEssentials", type: "Sustainable Products", image: "https://images.hdqwalls.com/download/ultra-instinct-scorpion-8k-n3-800x400.jpg" },
  { projectName: "techNest", type: "Tech News", image: "https://images.hdqwalls.com/download/triangles-neon-colors-8k-jx-800x400.jpg" },
  { projectName: "fitFlex", type: "Fitness App", image: "https://images.hdqwalls.com/download/low-poly-red-triangle-art-abstract-0y-800x400.jpg" },
  { projectName: "artAlchemy", type: "Art Gallery", image: "https://images.hdqwalls.com/download/abstract-graphic-design-4k-yj-800x400.jpg" },
  { projectName: "learnLink", type: "Education Portal", image: "https://images.hdqwalls.com/download/abstract-colorful-sand-do-800x400.jpg" },
]);
const hoveredProjectImage = ref("https://images.hdqwalls.com/download/the-dreamy-colorful-landscape-5k-9y-800x400.jpg");

const goToProjectDetail = () => {
  router.push('/ProjectDetail')
}

const computedImageUrl = computed(() => {
  // Check if the hovered image is a URL or a local file
  if (hoveredProjectImage.value.startsWith("http")) {
    return hoveredProjectImage.value;
  } else {
    // Assume it's a local file
    return new URL(`../assets/images/${hoveredProjectImage.value}`, import.meta.url).href;
  }
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0.3;
}
/* Hide the scrollbar */
::-webkit-scrollbar {
  width: 0.4rem; /* Width of the invisible scrollbar track */
}

/* Hide scrollbar track */
::-webkit-scrollbar-track {
  background: transparent; /* You can use any background color here */
}

/* Hide scrollbar thumb */
::-webkit-scrollbar-thumb {
  background: transparent; /* You can use any background color here */
}

/* Hide the scrollbar (existing styles) */
.arrow-image {
  width: 0;
  height: 25px;
  visibility: hidden;
  transition: width 0.3s; /* Add a transition for smooth effect */
}

/* Show the arrow image on hover */
.project:hover .arrow-image {
  width: 28px; /* Adjust the width as needed */
  visibility: visible;
}
</style>
