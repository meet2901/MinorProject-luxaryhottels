import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import About from './pages/About'
import Contact from './pages/Contact'
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
        </Routes>
      </Layout>
    </>
  )
}

export default App