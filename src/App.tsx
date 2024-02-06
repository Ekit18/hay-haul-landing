import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Advantages } from '@/components/Advantages';
import { Services } from '@/components/Services';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { ContactUs } from '@/components/ContactUs';
import { Footer } from '@/components/Footer';

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
