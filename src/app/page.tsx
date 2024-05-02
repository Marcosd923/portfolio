import {
  About,
  Contact,
  Footer,
  MainSection,
  Navbar,
  Proyects,
  SideElement,
  SideElementRigth,
  Skill,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideElement />
      <SideElementRigth />
      <MainSection />
      <About />
      <Proyects />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
