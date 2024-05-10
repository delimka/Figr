import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Loader from "./helpers/loader.tsx";
import PageWrapper from "./components/PageWrapper/PageWrapper.tsx";
const Hero = lazy(() => import("./components/Hero/Hero.tsx"));
const Services = lazy(() => import("./components/Services/Services.tsx"));
const Projects = lazy(() => import("./components/Projects/Projects.tsx"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs.tsx"));
const QuoteForm = lazy(() => import("./components/QuoteForm/QuoteForm.tsx"));
const Contacts = lazy(() => import("./components/Contacts/Contacts.tsx"));
const CompanyInfo = lazy(
  () => import("./components/CompanyInfo/CompanyInfo.tsx")
);
const Installation = lazy(
  () => import("./pages/Installation/Installation.tsx")
);
const Production = lazy(() => import("./pages/Production/Production.tsx"));
const Maintenance = lazy(() => import("./pages/Maintenance/Maintenance.tsx"));
const ConsoleCranes = lazy(
  () => import("./pages/ConsoleCranes/ConsoleCranes.tsx")
);
const GantryCranes = lazy(
  () => import("./pages/GantryCranes/GantryCranes.tsx")
);
const OverheadCranes = lazy(
  () => import("./pages/OverheadCranes/OverheadCranes.tsx")
);

const Contact = lazy(
  () => import("./pages/Contact/Contact.tsx")
);
const OurProjects = lazy(
  () => import("./pages/OurProjects/OurProjects.tsx")
);
import ScrollToTop from "./helpers/hooks/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Hero />
              <CompanyInfo />
              <AboutUs />
              <Services />
              <Projects />
              <Contacts />
              <QuoteForm />
            </Suspense>
          }
        />
        <Route
          path="/installation"
          element={
            <Suspense fallback={<Loader />}>
              <Installation />
            </Suspense>
          }
        />
        <Route
          path="/production"
          element={
            <Suspense fallback={<Loader />}>
              <PageWrapper>
                <Production />
              </PageWrapper>
            </Suspense>
          }
        />
        <Route
          path="/maintenance"
          element={
            <Suspense fallback={<Loader />}>
              <Maintenance />
            </Suspense>
          }
        />
       
        <Route
          path="/consoleCranes"
          element={
            <Suspense fallback={<Loader />}>
              <ConsoleCranes />
            </Suspense>
          }
        />
        <Route
          path="/gantryCranes"
          element={
            <Suspense fallback={<Loader />}>
              <GantryCranes />
            </Suspense>
          }
        />
        <Route
          path="/overheadCranes"
          element={
            <Suspense fallback={<Loader />}>
              <OverheadCranes />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
          <Route
          path="/ourProjects"
          element={
            <Suspense fallback={<Loader />}>
              <OurProjects />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
