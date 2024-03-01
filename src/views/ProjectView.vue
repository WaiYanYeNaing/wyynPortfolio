<template>
  <div class="flex flex-col h-screen py-28">
    <Nav />
    <div class="flex justify-between mt-20">
      <div class="min-w-[450px] w-3/6 relative">
        <transition name="fade" mode="out-in">
          <img :key="hoveredProjectImage" :src="hoveredProjectImage" class="rounded-r-[3rem] absolute bottom-0 left-0" alt="project">
        </transition>
      </div>

      <div class="min-w-[450px] mr-36">
        <div class="flex justify-between items-center pb-5">
          <div class="font-extrabold text-[3rem]">Projects</div>
          <div class="font-semibold text-xl">9</div>
        </div>
        <div class="h-[21rem] overflow-y-auto">
          <div v-for="(project, i) in projects" :key="i" class="project" @mouseover="hoveredProjectImage = project.image">
            <hr />
            <div class="flex justify-between py-5">
              <div class="flex flex-row items-center space-x-3">
                <img
                  src="@/assets/right_arrow_pj.png"
                  class="arrow-image"
                  alt="right arrow"
                />
                <div>{{ project.projectName }}</div>
              </div>
              <div>{{ project.type }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "../components/utility/Nav.vue";

const projects = ref([
  { projectName: "sharlee", type: "Branding", image: "https://images.hdqwalls.com/download/the-dreamy-colorful-landscape-5k-9y-800x400.jpg" },
  { projectName: "pixelverse", type: "Design Studio", image: "https://images.hdqwalls.com/download/landscape-dreamy-moon-minimalist-4k-qj-800x400.jpg" },
  { projectName: "foodieFinds", type: "Food Blog", image: "https://images.hdqwalls.com/download/free-fallen-yp-800x400.jpg" },
  { projectName: "wanderlustX", type: "Travel Platform", image: "https://images.hdqwalls.com/download/anime-girl-pier-side-fy-800x400.jpg" },
  { projectName: "ecoEssentials", type: "Sustainable Products", image: "https://images.hdqwalls.com/download/ultra-instinct-scorpion-8k-n3-800x400.jpg" },
  { projectName: "techNest", type: "Tech News", image: "https://images.hdqwalls.com/download/triangles-neon-colors-8k-jx-800x400.jpg" },
  { projectName: "fitFlex", type: "Fitness App", image: "https://images.hdqwalls.com/download/low-poly-red-triangle-art-abstract-0y-800x400.jpg" },
  { projectName: "artAlchemy", type: "Art Gallery", image: "https://images.hdqwalls.com/download/abstract-graphic-design-4k-yj-800x400.jpg" },
  { projectName: "learnLink", type: "Education Portal", image: "https://images.hdqwalls.com/download/abstract-colorful-sand-do-800x400.jpg" },
]);
const hoveredProjectImage = ref("https://images.hdqwalls.com/download/the-dreamy-colorful-landscape-5k-9y-800x400.jpg");

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
