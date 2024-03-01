<template>
  <div class="flex flex-col h-screen py-28">
    <Nav />
    <div class="flex">
      <div class="flex flex-col w-9/12 pl-[15%] pr-[5%] pt-24 space-y-5">
        <h1 class="text-4xl font-bold text-white">ABOUT</h1>
        <div class="h-[2px] bg-white"></div>
        <div class="leading-6">
          Hey, my name is Charles Bruyerre and I use Sharlee as my nickname
          across social medias. I’m a graphic designer, UX/UI designer &
          front-end web developer from France. I’m also passionate about pop
          music and make portraits and universes around what I listen to and I’m
          always curious to learn more when it comes to new technologies and
          creative coding.
        </div>
        
        <div class="flex items-center pt-8">
          <img src="@/assets/images/arrow_down.png" alt="arrow" class="w-5 h-5 mr-1" />
          <span class="text-white w-fit hover-underline-animation"
            @click="downloadResume"
            >resume</span
          >
        </div>
      </div>

      <!-- I want to rotate this infinitely -->
      <div class="absolute w-[25%] right-[4.6rem] top-[3rem] z-50"> 
        <img src="@/assets/images/now_playing.png" class="w-44 h-44 object-cover rounded-full rotate"> 
      </div>
      <div class="absolute w-[25%] right-10 top-20 z-50">  
        <img src="https://images.hdqwalls.com/download/shapes-abstract-4k-dk-500x500.jpg" class="w-28 h-28 object-cover rounded-full">
      </div>

      <div class="flex flex-col w-[25%] bg-red-300 absolute right-0 top-0 aspect-[4/6.5] h-auto rounded-bl-[3.5rem] overflow-hidden">
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
  audio.volume = 0.5
  audio.play();
  audio.addEventListener('ended', () => {
    isPlaying.value = false;
  });
});

onUnmounted(() => {
  audio.pause();
  audio.currentTime = 0;
  audio.removeEventListener('ended', () => {
    isPlaying.value = false;
  });
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
