import {
  About,
  Contact,
  Footer,
  MainSection,
  Navbar,
  Proyects,
  Skill,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <About />
      <Proyects />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
