import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/content/site";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <h2 className="text-sm font-medium text-muted-foreground">About</h2>
          <p className="mt-4 text-2xl leading-9 tracking-tight sm:text-3xl">
            {siteConfig.bio}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
