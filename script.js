const scrollToTop = (() => {
  document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > window.innerHeight * 0.5 ||
        document.documentElement.scrollTop > window.innerHeight * 0.5
      ) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

    scrollToTopBtn.addEventListener("click", () => {
      const scrollOptions = {
        top: 0,
        behavior: "smooth",
      };

      if (window.innerWidth > 768) {
        // For larger screens, smoothly scroll to the right before going to top
        scrollOptions.left = window.innerWidth - 60; // Adjust the value as needed
      }

      window.scrollTo(scrollOptions);
    });
  });
})();
