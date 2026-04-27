import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </main>
    </>
  );
}
