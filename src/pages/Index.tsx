import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import News from "@/components/News";
import Footer from "@/components/Footer";
import QuickLinks from "@/components/QuickLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        <Services />
        <News />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
