import { Advantages } from "@/components/Advantages";
import { ContactUs } from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Advantages />
      <Services />
      <Reviews />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
