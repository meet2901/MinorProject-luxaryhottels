import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import BookingForm from './pages/BookingForm'
import BookingCart from './pages/BookingCart'
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
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit'
import ProfileImageUpload from './pages/ProfileImageUpload'
import Dashboard from './pages/Dashboard'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <GlobalStyles />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Protected routes */}
          <Route path="/*" element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/rooms" element={<Rooms />} />
                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/booking" element={<BookingForm />} />
                  <Route path="/cart" element={<BookingCart />} />
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
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/edit" element={<ProfileEdit />} />
                  <Route path="/profile/image" element={<ProfileImageUpload />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
