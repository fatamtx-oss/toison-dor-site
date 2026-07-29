import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Adn from "./ui/Adn";
import Services from "./ui/Services";
import LeGeste from "./ui/LeGeste";
import PrendreForme from "./ui/PrendreForme";
import CeQuiNousAnime from "./ui/CeQuiNousAnime";
import NosHistoires from "./ui/NosHistoires";
import Questions from "./ui/Questions";
import EntrerEnRelation from "./ui/EntrerEnRelation";
import Footer from "./ui/Footer";
import ScrollToTop from "./ui/ScrollToTop";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Adn />
        <Services />
        <LeGeste />
        <PrendreForme />
        <CeQuiNousAnime />
        <NosHistoires />
        <Questions />
        <EntrerEnRelation />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}