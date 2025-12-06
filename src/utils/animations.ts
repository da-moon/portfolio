// Animation utilities (R5, R10) - Pure helpers for animations

/**
 * Creates a typing animation effect for terminal-style text
 */
export function typeText(
  element: HTMLElement,
  text: string,
  speed: number = 50,
): Promise<void> {
  return new Promise((resolve) => {
    let index = 0;
    element.textContent = "";

    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    };

    type();
  });
}

/**
 * Sets up Intersection Observer for scroll-triggered animations
 */
export function setupScrollAnimations(): void {
  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach(
    (el) => {
      observer.observe(el);
    },
  );
}

/**
 * Delays execution for a given number of milliseconds
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Adds staggered fade-in animation to child elements
 */
export function staggerFadeIn(
  container: HTMLElement,
  delayBetween: number = 100,
): void {
  const children = container.children;
  Array.from(children).forEach((child, index) => {
    const el = child as HTMLElement;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.4s ease ${
      index * delayBetween
    }ms, transform 0.4s ease ${index * delayBetween}ms`;

    // Trigger animation after a small delay
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 50);
  });
}
