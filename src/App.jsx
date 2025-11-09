import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-sky-200 selection:text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
