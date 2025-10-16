import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Bookings from './pages/Bookings'
import BookingForm from './pages/BookingForm'
import BookingCart from './pages/BookingCart'
import Checkout from './pages/Checkout'
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
import Books from './pages/Books'
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
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <GlobalStyles />
        <Layout>
          <Routes>
            {/* All routes are now public and accessible */}
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/booking" element={<BookingForm />} />
            <Route path="/cart" element={<BookingCart />} />
            <Route path="/checkout" element={<Checkout />} />
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
            <Route path="/books" element={<Books />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/profile/image" element={<ProfileImageUpload />} />
            <Route path="/dashboard" element={<ProtectedRoute adminOnly><Dashboard /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Redirect common typo to the correct dashboard route */}
          <Route path="/dasboard" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
