import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Guarantee from "@/components/Guarantee";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <About />
        <Testimonials />
        <Guarantee />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
