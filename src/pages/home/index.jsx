import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import Herosection from "../../components/herosection";
import CloudSolution from "../../components/cloudsolution";
import OurServices from "../../components/ourservices";
import TaxCounting from "../../components/taxcounting";
import Advantage from "../../components/advantage";
import Faqs from "../../components/faqs";
import Secure from "../../components/secure/index";
import Firms from "../../components/firms";
import Footer from "../../components/footer";
const Home = () => {
  return (
    <>
      <Herosection />
      <CloudSolution />
      <OurServices />
      <TaxCounting />
      <Advantage />
      <Faqs />
      <Secure />
      <Firms />
      <Footer />
    </>
  );
};

export default Home;
