// app/page.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import HowItWorks from "../components/HowItWorks";
import Engine from "../components/Engine";
import Pricing from "../components/Pricing";
import Security from "../components/Security";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Engine />
        <Pricing />
        <Security />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
