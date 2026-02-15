document.addEventListener("DOMContentLoaded", () => {
  // Hero Carousel
  let heroCurrentSlide = 0;
  const track = document.getElementById("heroCarouselTrack");
  const heroSlides = document.querySelectorAll(".hero-carousel-slide");
  const heroTotalSlides = heroSlides.length;

  if (track && heroTotalSlides > 0) {
    const updateHeroCarousel = () => {
      track.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
    };

    const autoAdvanceHeroCarousel = () => {
      heroCurrentSlide = (heroCurrentSlide + 1) % heroTotalSlides;
      updateHeroCarousel();
    };

    setInterval(autoAdvanceHeroCarousel, 5000);
  }

  // FAQ Interactivo
  document.querySelectorAll(".faq-question").forEach((q) => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.style.display === "block";

      document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));
      document.querySelectorAll(".faq-question span").forEach((s) => (s.textContent = "+"));

      if (!isOpen) {
        answer.style.display = "block";
        q.querySelector("span").textContent = "−";
      }
    });
  });

  // Contador dinámico
  const counterElement = document.querySelector("#counter");
  if (counterElement) {
    setInterval(() => {
      if (Math.random() > 0.3) {
        const current = parseInt(counterElement.textContent);
        counterElement.textContent = current + 1;
      }
    }, 10000 + Math.random() * 10000);
  }
  
  // Lazy load iframes (YouTube and Hotmart)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target;
        if (iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          iframe.removeAttribute('data-src');
          observer.unobserve(iframe);
        }
      }
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('iframe[data-src]').forEach(iframe => observer.observe(iframe));
});
