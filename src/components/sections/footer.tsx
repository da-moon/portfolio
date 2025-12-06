// Footer section - Contact links and copyright
import { SOCIAL_LINKS } from "../../constants/data.ts";
import { SECTION_IDS, UI } from "../../constants/content.ts";
import { Container } from "../layout/index.ts";

export function Footer() {
  return (
    <footer id={SECTION_IDS.contact} class="footer">
      <Container>
        <div class="footer__links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p class="footer__copy">
          {UI.footer.location} &bull; {UI.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
