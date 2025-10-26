import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ProductList />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
