<template>
  <div class="cursor" :class="{ 'cursor-big': isCursorBig }" :style="{ left: cursorX + 'px', top: cursorY + 'px' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const cursorX = ref(-100);
const cursorY = ref(window.innerHeight / 2);
const isCursorBig = ref(false);

onMounted(() => {
  document.body.addEventListener("mousemove", handleMouseMove);
  document.body.addEventListener("mousedown", handleMouseDown);
  document.body.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  document.body.removeEventListener("mousemove", handleMouseMove);
  document.body.removeEventListener("mousedown", handleMouseDown);
  document.body.removeEventListener("mouseup", handleMouseUp);
});

const handleMouseMove = (e) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
};

const handleMouseDown = (e) => {
  if (e.button === 0) { // Left button
    isCursorBig.value = true;
  }
};

const handleMouseUp = () => {
  isCursorBig.value = false;
};
</script>

<style scoped>
.cursor {
  position: fixed;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  background-color: transparent;
  z-index: 10000;
  border: 2px solid white;
  height: 30px;
  width: 30px;
  transition: all 200ms ease-out;
}

.cursor-big {
  height: 50px;
  width: 50px;
}
</style>
