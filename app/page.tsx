import Hero from '@/components/Hero';
import About from '@/components/About';




export default function Home() {
  return (
    <section className="bg-uk-background-primary-light">
      <Hero />
      <About />
    </section>
  );
}