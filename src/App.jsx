import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import { fetchCategories, fetchProducts } from "./store/actions/productActions";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Switch } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchCategories(dispatch);
  }, [dispatch]);

  useEffect(() => {
    verifyTokenAndAutoLogin(dispatch);
  }, [dispatch]);

  const Routes = () => (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/shop" component={ShopPage} />
      <Route path="/productDetail" component={ProductDetailPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/about" component={AboutUsPage} />
      <Route path="/signup" component={FormPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
