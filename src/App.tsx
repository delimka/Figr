import NavBar from './components/NavBar/NavBar.tsx';
import { lazy, Suspense } from 'react';
const Hero = lazy(() => import('./components/Hero/Hero.tsx'));
const Services = lazy(() => import('./components/Services/Services.tsx'));
const Projects = lazy(() => import('./components/Projects/Projects.tsx'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs.tsx'));
const QuoteForm = lazy(() => import('./components/QuoteForm/QuoteForm.tsx'));
const Footer = lazy(() => import('./components/Footer/Footer.tsx'));
const Contacts = lazy(() => import('./components/Contacts/Contacts.tsx'));
const CompanyInfo = lazy(() => import('./components/CompanyInfo/CompanyInfo.tsx'));
import Loader from "./helpers/loader.tsx";


const App = () => {
  return (
      <>
      <NavBar />
      <Suspense fallback={<Loader/>}>
      <Hero/>
      </Suspense>
      <Suspense>
      <CompanyInfo/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Contacts/>
      <QuoteForm/>
      <Footer/>
      </Suspense>
    </>
  );
};

export default App;
