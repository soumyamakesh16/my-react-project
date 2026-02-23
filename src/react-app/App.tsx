import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CartProvider } from "@/react-app/context/CartContext";
import HomePage from "@/react-app/pages/Home";
import ProductsPage from "@/react-app/pages/products";
import ProductDetails from "@/react-app/pages/ProductDetails";
import CategoryProducts from "@/react-app/pages/CategoryProducts";
import TamilNaduPage from "@/react-app/pages/locations/TamilNadu";
import AndhraPradeshPage from "@/react-app/pages/locations/AndhraPradesh";
import KarnatakaPage from "@/react-app/pages/locations/Karnataka";
import KeralaPage from "@/react-app/pages/locations/Kerala";
import SouthIndiaPage from "@/react-app/pages/locations/SouthIndia";
import WholesalePage from "@/react-app/pages/Wholesale";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/category/:slug" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wholesale" element={<WholesalePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Tamil Nadu SEO Pages */}
        <Route path="/leggings-manufacturer-in-tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/tirupur-leggings-manufacturer" element={<TamilNaduPage />} />
        <Route path="/chennai-leggings-supplier" element={<TamilNaduPage />} />
        <Route path="/coimbatore-leggings-wholesale" element={<TamilNaduPage />} />
        <Route path="/chudidar-leggings-manufacturer-in-tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/cotton-leggings-wholesale-in-tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/ankle-leggings-supplier-in-tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/shimmer-leggings-dealer-in-tamil-nadu" element={<TamilNaduPage />} />
        <Route path="/yoga-shorts-manufacturer-in-tamil-nadu" element={<TamilNaduPage />} />
        
        {/* Andhra Pradesh SEO Pages */}
        <Route path="/leggings-supplier-in-andhra-pradesh" element={<AndhraPradeshPage />} />
        <Route path="/leggings-wholesale-in-andhra-pradesh" element={<AndhraPradeshPage />} />
        <Route path="/vijayawada-leggings-wholesale" element={<AndhraPradeshPage />} />
        <Route path="/visakhapatnam-leggings-supplier" element={<AndhraPradeshPage />} />
        <Route path="/cotton-leggings-manufacturer-in-andhra" element={<AndhraPradeshPage />} />
        <Route path="/chudidar-leggings-dealer-in-andhra" element={<AndhraPradeshPage />} />
        
        {/* Karnataka SEO Pages */}
        <Route path="/leggings-wholesale-in-karnataka" element={<KarnatakaPage />} />
        <Route path="/leggings-dealer-in-karnataka" element={<KarnatakaPage />} />
        <Route path="/bangalore-leggings-wholesale" element={<KarnatakaPage />} />
        <Route path="/mysore-leggings-supplier" element={<KarnatakaPage />} />
        <Route path="/cotton-leggings-supplier-in-karnataka" element={<KarnatakaPage />} />
        <Route path="/ankle-leggings-wholesale-in-karnataka" element={<KarnatakaPage />} />
        
        {/* Kerala SEO Pages */}
        <Route path="/leggings-wholesale-in-kerala" element={<KeralaPage />} />
        <Route path="/kochi-leggings-wholesale" element={<KeralaPage />} />
        <Route path="/cotton-leggings-supplier-in-kerala" element={<KeralaPage />} />
        <Route path="/chudidar-leggings-dealer-in-kerala" element={<KeralaPage />} />
        <Route path="/ankle-fit-leggings-wholesale-in-kerala" element={<KeralaPage />} />
        <Route path="/shimmer-leggings-supplier-in-kerala" element={<KeralaPage />} />
        
        {/* South India Combo Pages */}
        <Route path="/south-india-leggings-manufacturer" element={<SouthIndiaPage />} />
        <Route path="/south-india-leggings-wholesale-supplier" element={<SouthIndiaPage />} />
        <Route path="/bulk-leggings-supplier-in-south-india" element={<SouthIndiaPage />} />
        <Route path="/ladies-leggings-manufacturer-south-india" element={<SouthIndiaPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
