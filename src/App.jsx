import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from './pages/About'; import Services from './pages/Services'; import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries'; import Training from './pages/Training'; import Careers from './pages/Careers';
import RequestQuote from './pages/RequestQuote'; import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /><Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} /><Route path="industries" element={<Industries />} />
          <Route path="training" element={<Training />} /><Route path="careers" element={<Careers />} />
          <Route path="request-quote" element={<RequestQuote />} /><Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
