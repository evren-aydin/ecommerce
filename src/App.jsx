import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/productDetail">
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/about">
          <AboutUsPage />
        </Route>
        <Route path="/signup">
          <FormPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
