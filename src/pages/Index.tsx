import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import About from "@/components/About";
import Services from "@/components/Services";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Leadership />
        <About />
        <Services />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
