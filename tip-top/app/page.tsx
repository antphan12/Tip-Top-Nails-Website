import Cursor from "./components/Cursor";
import ScrollRevealInit from "./components/ScrollRevealInit";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollRevealInit />
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <BookingForm />
      <Footer />
    </>
  );
}
