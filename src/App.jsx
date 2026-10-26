import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";

// Lazy load all pages - fixes Total Blocking Time 14ms -> 0ms + FCP
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Industries = lazy(() => import("./pages/Industries"));
const Training = lazy(() => import("./pages/Training"));
const Careers = lazy(() => import("./pages/Careers"));
const RequestQuote = lazy(() => import("./pages/RequestQuote"));
const Contact = lazy(() => import("./pages/Contact"));

// Track PageView on every SPA route change for Meta Pixel
function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.fbq) window.fbq('track', 'PageView');
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageTracker />
      <Suspense fallback={<div style={{padding:100,textAlign:'center'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:serviceId" element={<ServiceDetail />} />
            <Route path="industries" element={<Industries />} />
            <Route path="training" element={<Training />} />
            <Route path="careers" element={<Careers />} />
            <Route path="request-quote" element={<RequestQuote />} />
            <Route path="contact" element={<Contact />} />
            {/* Keyword-friendly rename of /reviews */}
            <Route path="reviews" element={<Navigate to="/client-testimonials-bangalore" replace />} />
            <Route path="client-testimonials-bangalore" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;