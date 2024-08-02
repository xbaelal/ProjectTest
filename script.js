const scrollAnimation = () => {
  window.addEventListener("wheel", (dets) => {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 90,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 270,
      });
    }
  });
};

const scrollAnimationforMob = () => {
  let touchStartY = 0;
  let touchEndY = 0;

  window.addEventListener(
    "touchstart",
    function (e) {
      touchStartY = e.touches[0].clientY;
    },
    { passive: false }
  );

  window.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
      touchEndY = e.changedTouches[0].clientY;
    },
    { passive: false }
  );

  window.addEventListener("touchend", () => {
    if (touchStartY > touchEndY) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 90,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        repeat: -1,
        duration: 4,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 270,
      });
    }
  });
};

window.addEventListener("click", () => {
  console.log(window.innerWidth);
});

if (window.innerWidth < 500) {
  scrollAnimationforMob();
} else {
  scrollAnimation();
}
