import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import FormPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyTokenAndAutoLogin } from "./store/actions/authActions";
import { fetchCategories } from "./store/actions/productActions";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

  useEffect(() => {
    verifyTokenAndAutoLogin(dispatch);
  }, [dispatch]);

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="/shop/:gender/:categoryName/:categoryId"
            element={<ShopPage />}
          />
          <Route
            path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
            element={<ProductDetailPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/signup" element={<FormPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
