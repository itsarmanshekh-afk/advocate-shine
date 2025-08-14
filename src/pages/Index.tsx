import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import News from "@/components/News";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <News />
        <Membership />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
