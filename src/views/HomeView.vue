<template>
  <main class="h-screen parallax-container" ref="parallaxContainer">
    <Welcome />
  </main>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";
import Welcome from "../components/Welcome.vue";

const parallaxContainer = ref(null);

const handleMouseMove = (event) => {
  const container = parallaxContainer.value;
  if (!container) return;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;

  const moveX = (mouseX - centerX) * 0.05;
  const moveY = (mouseY - centerY) * 0.05;

  container.style.backgroundPosition = `${moveX}px ${moveY}px`;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style>
.parallax-container {
  /* position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/circle_rotate.gif") center/cover;
  overflow: hidden;
  z-index: 1; */
  /* background-size: 110%; */
}
.text-light-animation {
  transition: 0.5s;
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

</style>
