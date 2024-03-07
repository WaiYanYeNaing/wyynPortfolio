<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import CircleCursor from "./components/utility/CircleCursor.vue";
import { ref } from "vue";

const router = useRouter();
const isLoading = ref(false);

router.beforeEach((to, from, next) => { 
  isLoading.value = true;
  next();
});

router.afterEach(() => { 
  setTimeout(() => {
    isLoading.value = false;
  }, 600);
});
</script>


<template>
  <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>  -->
  <CircleCursor />
  <div class="noise"></div>
  <div v-if="isLoading" class="loading_top_bar"></div>
  <!-- <RouterView /> -->
  <RouterView v-slot="{ Component }">
    <!-- <transition name="slide" mode="in-out"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </RouterView>
</template>

<style scoped>
/* .slide-enter-active {
  transition: all 0.4s ease;
}
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(100%);
} */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.noise {
  position: fixed;
  z-index: 9999;
  top: -300%;
  left: -150%;
  height: 600%;
  width: 600%;
  -webkit-animation: grain 7s steps(10) infinite;
  animation: grain 7s steps(10) infinite;
  background-image: url(https://itssharl.ee/noise.png);
  background-size: 200px;
  background-repeat: repeat;
  opacity: 0.2;
  pointer-events: none;
}
@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%, 0);
  }
  70% {
    transform: translate(0, 15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
}
.loading_top_bar{
  position: fixed;
  height: 5px;
  width: 0;
  background-color: white; 
  animation: loading 0.5s linear forwards;
}
@keyframes loading {
  from {
    width: 0;
    opacity: 1;
  }
  to {
    width: 100vw;
    opacity: 0.4;
  }
}
</style>
