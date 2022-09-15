import './App.css';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import Vision from './components/Vision';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="vision" element={<Vision/>} />
          <Route path="services" element={<Services/>} />
          <Route path="contactus" element={<ContactUs/>} />
        </Route>
      </Routes>
  </HashRouter>
  );
}

export default App;
