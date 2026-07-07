import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Trees from "@/components/Trees";
import FinalCTA from "@/components/FinalCTA";
import Guarantee from "@/components/Guarantee";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollReset from "@/components/ScrollReset";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollReset />
      <Navbar />
      <main>
        <Hero />
        <Solution />
        <Process />
        <About />
        <Testimonials />
        <FinalCTA />
        <Guarantee />
        <Trees />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
