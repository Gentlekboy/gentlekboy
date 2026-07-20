import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Now from "@/components/Now";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Now />
        <About />
      </main>
      <Footer />
    </>
  );
}
