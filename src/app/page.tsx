import { Hero, About, Skills, Projects, Contact } from "@/components/sections";
import { Header, Footer } from "@/components/layout";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
