import Header from "@/components/Header";
import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Explore from "@/components/Explore";

export const metadata = {
  title: "Skills — Prachi Kamboz",
};

export default function SkillsPage() {
  return (
    <div>
      <Header />
      <Section
        name="SKILLS"
        title="Technologies I work with every day."
        tagline="Always learning, always building."
        speed={70}
      />
      <HeroSection />
      <Explore />
      <Skills />
    </div>
  );
}
