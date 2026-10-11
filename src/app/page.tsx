import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AgentsSection from "./components/AgentsSection";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <AgentsSection />
      <FAQs />
      <Footer />
    </main>
  );
}
