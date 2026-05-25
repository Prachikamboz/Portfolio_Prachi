import Header from "@/components/Header";
import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Explore from "@/components/Explore";

export const metadata = {
  title: "Prachi Kamboj — Frontend Developer",
  description: "Frontend Developer with 1 year experience shipping live production platforms. React.js, Next.js, TypeScript, Tailwind CSS.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Section
        name="Prachi"
        title="Hi, I'm Prachi Kamboj — Frontend Developer (React & Next.js)."
        tagline="I build scalable, user-friendly web applications."
        speed={65}
      />
      <HeroSection />
      <Explore />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}
