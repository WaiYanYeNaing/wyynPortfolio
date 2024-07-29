<template>
    <div class="flex h-screen">
        <!-- <Nav class="pt-28 w-screen absolute" /> -->
        <div ref="scrollableDiv" class="flex z-50 flex-col absolute lg:ml-[16%] lg:pr-[16%] pb-20 overflow-y-scroll h-screen">
            <div class="w-full pt-10 sm:pt-0 px-6 sm:px-0">
                <img src="https://images.hdqwalls.com/download/the-dreamy-colorful-landscape-5k-9y-800x400.jpg" class="w-full h-[60vh] sm:h-[80vh] object-cover rounded-t-[3rem] sm:rounded-t-none rounded-b-[3rem]">
            </div>
            <div class="text-2xl sm:text-3xl md:text-5xl font-bold border-b-2 mx-[8%] lg:mx-0 border-white pb-5 mt-16 text-accent">SHARLEE</div>

            <div class="flex flex-col md:flex-row mt-5 mx-[8%] lg:mx-0">
                <div class="flex-1 space-y-5 text-xs sm:text-sm lg:text-base">
                    <div class="flex">
                        <div class="w-1/2 md:w-[35%] mr-3 font-semibold tracking-widest text-accent">Category</div>
                        <div class="w-1/2 md:w-[55%]">Company Management</div>
                    </div> 
                    <div class="flex">
                        <div class="w-1/2 md:w-[35%] mr-3 font-bold tracking-widest text-accent">Year</div>
                        <div class="w-1/2 md:w-[55%]">2019</div>
                    </div> 
                    <div class="flex">
                        <div class="w-1/2 md:w-[35%] mr-3 font-bold tracking-widest text-accent">Technologies</div>
                        <div class="w-1/2 md:w-[55%] leading-7">Vue.js, .NET Core, HTML5, CSS3, JavaScript, Bootstrap</div>
                    </div> 
                </div>
                <div class="flex-1 mt-10 lg:mt-0">
                    <p class="leading-6 text-xs sm:text-sm lg:text-base">I designed and developed my portfolio website to showcase my skills, projects, and experience as a web developer. The website features a clean and modern design, with a focus on user experience and visual appeal. I used Vue.js for the frontend and .NET Core for the backend, ensuring fast performance and efficient data management.</p>
                </div>
            </div>

            <img src="https://images.hdqwalls.com/download/voronoi-pattern-4k-r5-1920x1080.jpg" class="w-full mt-10 object-cover px-[8%] lg:px-0">
            <img src="https://images.hdqwalls.com/download/abstract-pink-wireframe-pattern-4k-z4-1920x1080.jpg" class="w-full mt-10 object-cover px-[8%] lg:px-0">
            <img src="https://images.hdqwalls.com/download/imac-grey-5k-vb-1920x1080.jpg" class="w-full mt-10 object-cover px-[8%] lg:px-0">
            <img src="https://images.hdqwalls.com/download/desert-night-macos-mojave-5k-lb-1920x1080.jpg" class="w-full mt-10 object-cover px-[8%] lg:px-0">
            <img src="https://images.hdqwalls.com/download/macos-mojave-5k-zm-1920x1080.jpg" class="w-full mt-10 object-cover px-[8%] lg:px-0">
        
            <div class="flex justify-between items-center border-t-2 mt-7 pt-8 text-lg next-project cursor-pointer mx-[8%]">
                <div class="flex flex-row items-center space-x-3">
                <img
                    src="@/assets/right_arrow_pj.png"
                    class="arrow-image"
                    alt="right arrow"
                />
                <div class="font-bold text-xs sm:text-sm md:text-base tracking-wider">next project</div>
                </div>
                <div class="font-bold text-xs sm:text-sm md:text-base tracking-wider">project name</div>
            </div>
        </div>
    </div>
</template>

<script setup> 
import Nav from "../components/utility/Nav.vue";
import useSmoothScroll from "../components/utility/SmoothScroll.js";

const { scrollableDiv } = useSmoothScroll();
</script>

<style scoped> 
/* Hide the scrollbar (existing styles) */
.arrow-image {
  width: 0;
  height: 25px;
  visibility: hidden;
  transition: width 0.3s; /* Add a transition for smooth effect */
}

/* Show the arrow image on hover */
.next-project:hover .arrow-image {
  width: 28px; /* Adjust the width as needed */
  visibility: visible;
}
</style>