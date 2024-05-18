import {
  About,
  Contact,
  Footer,
  MainSection,
  Navbar,
  Proyects,
  SideElement,
  Skill,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideElement />
      <MainSection />
      <About />
      <Proyects />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
