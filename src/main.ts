import "./style.css";
import {
  CERTIFICATIONS,
  EXPERIENCE,
  PERSONAL,
  PROJECTS,
  SKILLS,
  SOCIAL_LINKS,
} from "./constants/data.ts";
import { SECTION_IDS, UI } from "./constants/content.ts";
import { delay, setupScrollAnimations, typeText } from "./utils/animations.ts";
import type {
  CertificationItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
} from "./types/index.ts";

// Component render functions (R4, R8) - Presentational only

function renderHero(): string {
  return `
    <section id="${SECTION_IDS.hero}" class="section section--hero">
      <div class="container">
        <div class="hero__content">
          <p class="terminal hero__greeting">
            <span class="terminal__prompt">${UI.hero.greeting}</span>
          </p>
          <h1 class="hero__name terminal">
            <span class="terminal__prompt">&gt; </span>
            <span id="typed-name"></span>
            <span class="terminal__cursor"></span>
          </h1>
          <p class="hero__title" style="opacity: 0;">${PERSONAL.title}</p>
          <p class="hero__tagline" style="opacity: 0;">${PERSONAL.tagline}</p>
          <div class="hero__cta" style="opacity: 0;">
            <a href="${PERSONAL.github}" target="_blank" rel="noopener noreferrer" class="btn">
              ${UI.hero.cta} →
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSkillGroup(group: SkillGroup): string {
  const badges = group.skills
    .map((skill) => `<span class="badge">${skill}</span>`)
    .join("");

  return `
    <div class="skills-category">
      <h3 class="skills-category__title">${group.title}</h3>
      <div class="skills-list">${badges}</div>
    </div>
  `;
}

function renderSkills(): string {
  const skillGroups = SKILLS.map(renderSkillGroup).join("");

  return `
    <section id="${SECTION_IDS.skills}" class="section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <h2 class="section__title">${UI.sections.skills}</h2>
        </div>
        <div class="skills-grid animate-on-scroll">
          ${skillGroups}
        </div>
      </div>
    </section>
  `;
}

function renderExperienceItem(item: ExperienceItem): string {
  const highlights = item.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");

  return `
    <div class="timeline__item">
      <span class="timeline__date">${item.dateRange}</span>
      <h3 class="timeline__title">${item.title}</h3>
      <p class="timeline__company">${item.industry} • ${item.location}</p>
      <ul class="timeline__highlights">
        ${highlights}
      </ul>
    </div>
  `;
}

function renderExperience(): string {
  const items = EXPERIENCE.map(renderExperienceItem).join("");

  return `
    <section id="${SECTION_IDS.experience}" class="section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <h2 class="section__title">${UI.sections.experience}</h2>
        </div>
        <div class="timeline animate-on-scroll">
          ${items}
        </div>
      </div>
    </section>
  `;
}

function renderProjectCard(project: ProjectItem): string {
  const tags = project.tags
    .map((tag) => `<span class="badge badge--teal">${tag}</span>`)
    .join("");

  const linkHtml = project.link
    ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="card__link">View →</a>`
    : "";

  return `
    <div class="card">
      <h3 class="card__title">${project.title}</h3>
      <p class="card__description">${project.description}</p>
      <div class="card__tags">${tags}</div>
      ${linkHtml}
    </div>
  `;
}

function renderProjects(): string {
  const cards = PROJECTS.map(renderProjectCard).join("");

  return `
    <section id="${SECTION_IDS.projects}" class="section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <h2 class="section__title">${UI.sections.projects}</h2>
        </div>
        <div class="grid grid--2 stagger-children">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

function renderCertBadge(cert: CertificationItem): string {
  return `
    <div class="badge">${cert.name}</div>
  `;
}

function renderCertifications(): string {
  const kubeCerts = CERTIFICATIONS.filter((c) => c.category === "kubernetes");
  const cloudCerts = CERTIFICATIONS.filter((c) => c.category === "cloud");
  const hashiCerts = CERTIFICATIONS.filter((c) => c.category === "hashicorp");
  const linuxCerts = CERTIFICATIONS.filter((c) => c.category === "linux");

  const renderCertGroup = (
    title: string,
    certs: CertificationItem[],
  ): string => {
    if (certs.length === 0) return "";
    return `
      <div class="skills-category">
        <h3 class="skills-category__title">${title}</h3>
        <div class="skills-list">
          ${certs.map(renderCertBadge).join("")}
        </div>
      </div>
    `;
  };

  return `
    <section id="${SECTION_IDS.certifications}" class="section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <h2 class="section__title">${UI.sections.certifications}</h2>
        </div>
        <div class="certs-grid animate-on-scroll">
          ${renderCertGroup("Kubernetes", kubeCerts)}
          ${renderCertGroup("Cloud Platforms", cloudCerts)}
          ${renderCertGroup("HashiCorp", hashiCerts)}
          ${renderCertGroup("Linux", linuxCerts)}
        </div>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  const links = SOCIAL_LINKS.map(
    (link) => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="footer__link">
      ${link.label}
    </a>
  `,
  ).join("");

  return `
    <footer id="${SECTION_IDS.contact}" class="footer">
      <div class="container">
        <div class="footer__links">
          ${links}
        </div>
        <p class="footer__copy">
          ${UI.footer.location} • ${UI.footer.copyright}
        </p>
      </div>
    </footer>
  `;
}

function renderBackgroundEffects(): string {
  return `
    <div class="bg-grid"></div>
    <div class="bg-gradient"></div>
  `;
}

// Main app composition
function renderApp(): string {
  return `
    ${renderBackgroundEffects()}
    ${renderHero()}
    ${renderSkills()}
    ${renderExperience()}
    ${renderProjects()}
    ${renderCertifications()}
    ${renderFooter()}
  `;
}

// Hero animation sequence
async function animateHero(): Promise<void> {
  const typedName = document.getElementById("typed-name");
  const heroTitle = document.querySelector(".hero__title") as HTMLElement;
  const heroTagline = document.querySelector(".hero__tagline") as HTMLElement;
  const heroCta = document.querySelector(".hero__cta") as HTMLElement;

  if (!typedName) return;

  // Type the name
  await typeText(typedName, PERSONAL.name, 60);
  await delay(300);

  // Fade in title
  if (heroTitle) {
    heroTitle.style.transition = "opacity 0.5s ease";
    heroTitle.style.opacity = "1";
  }
  await delay(200);

  // Fade in tagline
  if (heroTagline) {
    heroTagline.style.transition = "opacity 0.5s ease";
    heroTagline.style.opacity = "1";
  }
  await delay(200);

  // Fade in CTA
  if (heroCta) {
    heroCta.style.transition = "opacity 0.5s ease";
    heroCta.style.opacity = "1";
  }
}

// Initialize application
function init(): void {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  app.innerHTML = renderApp();

  // Setup scroll animations
  setupScrollAnimations();

  // Run hero animation
  animateHero();
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
