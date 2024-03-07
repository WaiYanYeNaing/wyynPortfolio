<template>
  <div class="flex flex-col h-screen pt-10 sm:pt-14 md:py-28">
    <Nav />
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col order-2 md:order-1 w-full md:w-[55%] lg:w-[75%] pl-[5%] sm:pl-[5%] ml:pl-[10%] lg:pl-[15%] pr-[5%] pt-24 space-y-5 mb-20 md:mb-0">
        <h1 class="text-4xl font-bold text-white">ABOUT</h1>
        <div class="h-[2px] bg-white"></div>
        <div class="leading-5 lg:leading-6 text-sm lg:text-base">
          Hey there, I'm Wai Yan Ye Naing, known as Y. I'm a multi-faceted creative with a strong focus on web development.
          With 4.5 years of experience, I specialize in Vue.js, React, and .NET Core, crafting seamless, user-centric web applications.
          I'm always on the lookout for new challenges and opportunities to expand my skills in creative coding and emerging technologies. Let's collaborate and bring your ideas to life!
        </div>
        
        <div class="flex items-center pt-8">
          <img src="@/assets/images/arrow_down.png" alt="arrow" class="w-4 lg:w-5 h-4 lg:h-5 mr-1" />
          <span class="text-white w-fit hover-underline-animation text-sm lg:text-base"
            @click="downloadResume"
            >resume</span
          >
        </div>
      </div>
 
      <div class="absolute hidden md:flex right-[35%] lg:right-[20%]  top-[3rem]">
        <div class="relative top-1 z-30"> 
          <img src="@/assets/images/now_playing.png" class="w-44 h-44 object-cover rounded-full rotate"> 
        </div>
        <div class="absolute right-[31px] top-[36px] z-30">  
          <img src="https://images.hdqwalls.com/download/shapes-abstract-4k-dk-500x500.jpg" class="w-28 h-28 object-cover rounded-full">
        </div>
      </div>

      <div class="flex flex-col order-1 md:order-2 mx-auto w-[80%] md:w-[45%] lg:w-[25%] bg-red-300 md:absolute right-0 top-0 aspect-[4/5.5] lg:aspect-[4/6.5] h-auto rounded-[1.5rem] md:rounded-t-none md:rounded-br-none md:rounded-bl-[3.54rem] overflow-hidden">
        <img src="@/assets/images/about.jpg" class="h-full object-cover" />
      </div>

      <div></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Nav from "../components/utility/Nav.vue";
import { onMounted, onUnmounted, ref } from 'vue';
import audioFile from '@/assets/mp3/calm.mp3';

const router = useRouter();

const audio = new Audio(audioFile);
const isPlaying = ref(false);

const downloadResume = async () => {
  const fileID = '1aCYmTMF6Yy_AhQK3T4RMWKmqIw7y0kFz'; // Replace with your file ID
  const url = `https://drive.google.com/uc?export=download&id=${fileID}`;
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', '');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// const toggleMusic = () => {
//   if (isPlaying.value) {
//     audio.pause();
//   } else {
//     audio.play();
//   }
//   isPlaying.value = !isPlaying.value;
// }
 
onMounted(() => {
  // audio.volume = 0.3
  // audio.play();
  // audio.addEventListener('ended', () => {
  //   isPlaying.value = false;
  // });
});

onUnmounted(() => {
  // audio.pause();
  // audio.currentTime = 0;
  // audio.removeEventListener('ended', () => {
  //   isPlaying.value = false;
  // });
})
</script>

<style scoped>
.rotate {
  animation: rotation 10s linear infinite;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
