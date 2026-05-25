import Header from "@/components/Header";
import Section from "@/components/Section";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import Details from "@/components/Details";
import Explore from "@/components/Explore";

export const metadata = {
  title: "About — Prachi Kamboz",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Section
        name="ABOUT ME"
        title="Get to know more about"
        tagline="who i am"
        speed={70}
      />
      <HeroSection />
      <Explore />
      <Cards />
      <Details />
    </>
  );
}
