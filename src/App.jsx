import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import About from './pages/About'
import Contact from './pages/Contact'
import Dining from './pages/Dining'
import Spa from './pages/Spa'
import Events from './pages/Events'
import Entertainment from './pages/Entertainment'
import TravelServices from './pages/TravelServices'
import Loyalty from './pages/Loyalty'
import Sustainability from './pages/Sustainability'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Shop from './pages/Shop'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/events" element={<Events />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/travelservices" element={<TravelServices />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
