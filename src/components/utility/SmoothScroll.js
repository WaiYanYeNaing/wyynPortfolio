import { onMounted, ref } from "vue";

export default function useSmoothScroll(target, speed = 120, smooth = 12) {
  const scrollableDiv = ref(null);

  onMounted(() => {
    initSmoothScroll(target || scrollableDiv.value, speed, smooth);
  });

  function initSmoothScroll(target, speed, smooth) {
    if (target === document) {
      target =
        document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body;
    }

    let moving = false;
    let pos = target.scrollTop;
    let frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target;

    target.addEventListener("mousewheel", scrolled, { passive: false });
    target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      let delta = normalizeWheelDelta(e);

      pos += -delta * speed;
      pos = Math.max(
        0,
        Math.min(pos, target.scrollHeight - frame.clientHeight)
      ); // limit scrolling

      if (!moving) {
        update();
      }
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta) {
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
        } else {
          return -e.detail / 3; // Firefox
        }
      } else {
        return e.wheelDelta / 120; // IE,Safari,Chrome
      }
    }

    function update() {
      moving = true;

      let delta = (pos - target.scrollTop) / smooth;

      target.scrollTop += delta;

      if (Math.abs(delta) > 0.5) {
        requestFrame(update);
      } else {
        moving = false;
      }
    }

    let requestFrame = // requestAnimationFrame cross browser
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      };
  }

  return { scrollableDiv };
}
