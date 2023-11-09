import NavBar from './components/NavBar/NavBar.tsx';
import Hero from './components/Hero/Hero.tsx';
import CompanyInfo from './components/CompanyInfo/CompanyInfo.tsx';
import AboutUs from './components/AboutUs/AboutUs.tsx';
import Services from './components/Services/Services.tsx';
import Projects from './components/Projects/Projects.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import QuoteForm from './components/QuoteForm/QuoteForm.tsx';
import Footer from './components/Footer/Footer.tsx';



const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <CompanyInfo/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Contacts/>
      <QuoteForm/>
      <Footer/>
    </>
  );
};

export default App;
